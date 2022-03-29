import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, ButtonToolbar, Form, FormGroup, Modal } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Typeahead } from 'react-bootstrap-typeahead'
import { createReview } from '../actions/reviewActions'
import { REVIEW_CREATE_RESET } from '../constants/reviewConstants'
import Loader from './Loader'
import Message from './Message'
import ReviewModal from './ReviewModal'
import { listDrugLabels } from '../actions/drugActions'
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

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const drugList = useSelector((state) => state.drugList)
  const { drugs } = drugList

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
    dispatch({ type: REVIEW_CREATE_RESET })
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
    if (!drugs) {
      dispatch(listDrugLabels())
    }
    if (!errTypeList) {
      dispatch(listDrugErrTypes())
    }
  }, [])
  return (
    <>
      {message && <Message children={message} />}
      <ReviewModal
        showTemplates={showTemplates}
        setShowTemplates={() => setShowTemplates()}
        selectedDgErr={selectedDgErr}
      />
      <Form>
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
        {!drugs || !errTypeList ? (
          <Loader />
        ) : (
          <>
            {drugErrs.map((dgErr) => (
              <div key={dgErr.idx} className="row py-3">
                <Form.Group className="col-sm-6">
                  <Form.Label>Drug Of Err</Form.Label>
                  <Typeahead
                    placeholder="Enter Medication"
                    options={drugs}
                    onChange={(e) => handleDrug(e, dgErr)}
                    data-id={dgErr.idx}
                  />
                </Form.Group>
                <FormGroup className="col-sm-6">
                  <Form.Label>Type Of Err</Form.Label>
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
          </>
        )}
        <div className="row justify-content-end">
          <Button onClick={(e) => submitHandler(e)} className="btn-primary">
            Add Review
          </Button>
        </div>
      </Form>
    </>
  )
}

export default ReviewForm
