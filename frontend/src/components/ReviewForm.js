import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonToolbar, Form, FormGroup, Modal } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Typeahead } from 'react-bootstrap-typeahead'
import { createReview } from '../actions/reviewActions'
import Loader from './Loader'
import Message from './Message'
import ReviewTemplateModal from './ReviewTemplateModal'
import { listDrugRoots } from '../actions/drugActions'
import { listDrugErrTypes } from '../actions/errTypeActions'

const ReviewForm = ({ admissionId, patientId, teamId }) => {
  const [reviewDate, setReviewDate] = useState(new Date())
  const [clinicalNote, setClinicalNote] = useState('')
  const [drugErrs, setDrugErrs] = useState([
    {
      idx: 1,
      errDrug: '',
      errType: '',
      errNote: '',
    },
  ])
  const [message, setMessage] = useState('')
  const [showTemplates, setShowTemplates] = useState(false)
  const [selectedDgErr, setSelectedDgErr] = useState()
  const [tradeLabels, setTradeLabels] = useState()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const drugRootStore = useSelector((state) => state.drugRootStore)
  const { drugRoots } = drugRootStore

  const createdReviewStore = useSelector((state) => state.createdReviewStore)
  const { loading, newReview } = createdReviewStore

  const errTypes = useSelector((state) => state.errTypes)
  const { errTypeList } = errTypes

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if (!reviewDate || !clinicalNote || drugErrs.length === 0) {
      alert('all cells are required')
    }
    dispatch(
      createReview({
        admissionId,
        userId: userInfo._id,
        patientId,
        teamId,
        reviewDate,
        clinicalNote,
        drugErrs,
      })
    )
  }
  const handleDrug = (e, dgErr) => {
    if (e.length !== 0) {
      dgErr.errDrug = e['0']._id
    }
  }

  const handleErrType = (e, dgErr) => {
    if (e.length !== 0) {
      dgErr.errType = e['0']._id
    }
  }
  const handleErrNote = (data, dgErr) => {
    dgErr.errNote = data
  }
  const addNewRow = () => {
    setDrugErrs([
      ...drugErrs,
      {
        idx: Math.random(),
        errDrug: '',
        errType: '',
        errNote: '',
      },
    ])
  }
  const deleteRow = (dgErr) => {
    setDrugErrs(drugErrs.filter((e) => e !== dgErr))
  }

  const modalTemplates = (e) => {
    setShowTemplates(!showTemplates)
    setSelectedDgErr(e)
  }
  useEffect(() => {
    if (!drugRoots) {
      dispatch(listDrugRoots())
    } else {
      if (!tradeLabels) {
        setTradeLabels(drugRoots.map((d) => d.tradeLabels).flat())
      }
    }
    if (!errTypeList) {
      dispatch(listDrugErrTypes())
    }
    if (newReview) {
      setMessage('The review saved')
      // setReviewDate(' ')
      // setClinicalNote(' ')
      // setDrugErrs([{ idx: 1, errDrug: '', errType: '', errNote: ' ' }])
    }
  }, [newReview, drugRoots, tradeLabels, errTypeList])
  return (
    <>
      <ReviewTemplateModal
        showTemplates={showTemplates}
        setShowTemplates={() => setShowTemplates()}
        selectedDgErr={selectedDgErr}
      />
      <Form>
        {!tradeLabels || !errTypeList || loading ? (
          <Loader />
        ) : (
          <>
            <Form.Group controlId="reviewDate">
              <Form.Label>
                <h2>Review Date</h2>
              </Form.Label>
              <Form.Control
                type="date"
                value={reviewDate}
                onChange={(e) => setReviewDate(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="clinicalNote">
              <Form.Label>
                <h2>Clinical Notes</h2>
              </Form.Label>
              <div className="text-dark">
                {' '}
                <CKEditor
                  editor={ClassicEditor}
                  data={clinicalNote}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setClinicalNote(data)
                  }}
                />
              </div>
            </Form.Group>

            {drugErrs.map((dgErr) => (
              <div key={dgErr.idx} className="row py-3">
                <Form.Group className="col-sm-6">
                  <Form.Label>Drug Of Err</Form.Label>
                  <Typeahead
                    placeholder="Enter Medication"
                    options={tradeLabels}
                    onChange={(e) => handleDrug(e, dgErr)}
                    id={dgErr.errDrug}
                  />
                </Form.Group>
                <FormGroup className="col-sm-6">
                  <Form.Label>Type Of Err</Form.Label>
                  {/* <select
                    className="custom-select"
                    type="name"
                    noneSelectedText="Insert Placeholder text"
                    value={dgErr.errType}
                    onChange={(e) => handleErrType(e, dgErr)}>
                    {errTypeList.map((t) => (
                      <option value={t._id}>{t.label}</option>
                    ))}
                  </select> */}
                  <Typeahead
                    placeholder="Enter Medication"
                    options={errTypeList}
                    onChange={(e) => handleErrType(e, dgErr)}
                    data-id={dgErr.idx}
                  />
                </FormGroup>
                <Form.Group className="col-sm-12">
                  <Form.Label>Error Notes</Form.Label>
                  <div className="text-dark">
                    {' '}
                    <CKEditor
                      editor={ClassicEditor}
                      data={dgErr.errNote}
                      onChange={(event, editor) => {
                        const data = editor.getData()
                        handleErrNote(data, dgErr)
                      }}
                    />
                  </div>
                </Form.Group>
                <ButtonToolbar className="container justify-content-center">
                  <Button onClick={() => addNewRow()}>
                    <i className="fa fa-plus-circle" aria-hidden="true" />
                  </Button>
                  <Button
                    className="ml-3"
                    variant="warning"
                    onClick={() => modalTemplates(dgErr)}>
                    Show Templates
                  </Button>
                  {dgErr.idx !== 1 && (
                    <Button
                      className="btn btn-danger ml-3"
                      onClick={() => deleteRow(dgErr)}>
                      <i className="fa fa-minus" aria-hidden="true" />
                    </Button>
                  )}
                </ButtonToolbar>
              </div>
            ))}
            <div className="row justify-content-end">
              <Button onClick={(e) => submitHandler(e)} className="btn-primary">
                Add Review
              </Button>
            </div>
          </>
        )}
      </Form>
      {message && (
        <Message setMessgae={setMessage} variant="success" children={message} />
      )}
    </>
  )
}

export default ReviewForm
