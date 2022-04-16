import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  ButtonToolbar,
  Form,
  FormGroup,
  Modal,
  ModalBody,
} from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Typeahead } from 'react-bootstrap-typeahead'

import { REVIEW_LIST_RESET } from '../constants/reviewConstants'
import Loader from './Loader'
import Message from './Message'
import ReviewTemplateModal from './ReviewTemplateModal'
import { deleteReview, updateReview } from '../actions/reviewActions'
import { listDrugRoots } from '../actions/drugActions'

const ReviewUpdateModal = ({
  setSelectedReview,
  selectedReview,
  patientId,
  teamId,
}) => {
  const [reviewId, setReviewId] = useState()
  const [clinicalNote, setClinicalNote] = useState('')
  const [reviewDate, setReviewDate] = useState('')
  const [drugErrs, setDrugErrs] = useState([
    {
      _id: 0,
      errDrug: '',
      errType: '',
      errNote: '',
    },
  ])
  const [message, setMessage] = useState('')
  const [showTemplates, setShowTemplates] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [selectedDgErr, setSelectedDgErr] = useState()
  const [tradeLabels, setTradeLabels] = useState()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const drugRootStore = useSelector((state) => state.drugRootStore)
  const { drugRoots } = drugRootStore

  const errTypes = useSelector((state) => state.errTypes)
  const { errTypeList } = errTypes

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if (!reviewDate || !clinicalNote || drugErrs.length === 0) {
      alert('all cells are required')
    }
    dispatch(
      updateReview({
        reviewId,
        userId: userInfo._id,
        patientId,
        teamId,
        reviewDate,
        clinicalNote,
        drugErrs,
      })
    )
    dispatch({ type: REVIEW_LIST_RESET })
    setShowUpdateModal(false)
    setSelectedReview()
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

  const deleteHandler = () => {
    if (reviewId) {
      dispatch(deleteReview(reviewId))
      setSelectedReview()
    }
  }
  useEffect(() => {
    if (!drugRoots) {
      dispatch(listDrugRoots())
    } else {
      if (!tradeLabels) {
        setTradeLabels(drugRoots.map((d) => d.tradeLabels).flat())
      }
    }

    if (selectedReview) {
      setReviewId(selectedReview._id)
      setReviewDate(selectedReview.reviewDate.substring(0, 10))
      setClinicalNote(selectedReview.clinicalNote)
      setDrugErrs(selectedReview.drugErrs)
      setShowUpdateModal(true)
    } else {
      setShowUpdateModal(false)
      setReviewId('')
      setReviewDate('')
      setClinicalNote('')
      setDrugErrs([
        {
          _id: 0,
          errDrug: '',
          errType: '',
          errNote: '',
        },
      ])
    }
  }, [selectedReview, showUpdateModal, drugRoots, tradeLabels])
  return (
    <>
      {message && <Message children={message} />}
      <ReviewTemplateModal
        showTemplates={showTemplates}
        setShowTemplates={() => setShowTemplates()}
        selectedDgErr={selectedDgErr}
      />

      <Modal
        size="lg"
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        backdrop="static"
        keyboard={false}>
        <ModalBody>
          <Form>
            {!tradeLabels || !errTypeList ? (
              <Loader />
            ) : (
              <>
                <Form.Group>
                  <Form.Label>
                    <h2>Review Date</h2>
                  </Form.Label>

                  <Form.Control
                    type="date"
                    value={reviewDate}
                    onChange={(e) =>
                      setReviewDate(e.target.value)
                    }></Form.Control>
                </Form.Group>
                <Form.Group>
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
                  <div key={dgErr._id} className="row py-3">
                    <Form.Group className="col-sm-6">
                      <Form.Label>Drug Of Err</Form.Label>

                      <Typeahead
                        defaultInputValue={
                          dgErr.errDrug &&
                          tradeLabels.find(
                            (d) => d._id.toString() === dgErr.errDrug.toString()
                          ).label
                        }
                        options={tradeLabels}
                        onChange={(e) => handleDrug(e, dgErr)}
                        id={dgErr.errDrug}
                      />
                    </Form.Group>
                    <FormGroup className="col-sm-6">
                      <Form.Label>Type Of Err</Form.Label>
                      <Typeahead
                        defaultInputValue={
                          dgErr.errType &&
                          errTypeList.find(
                            (e) => e._id.toString() === dgErr.errType.toString()
                          ).label
                        }
                        placeholder="Enter Medication"
                        options={errTypeList}
                        onChange={(e) => handleErrType(e, dgErr)}
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

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-4">
                  <Button
                    onClick={() => deleteHandler()}
                    className="btn-danger">
                    Delete
                  </Button>
                </div>
                <div className="col-4">
                  <Button
                    onClick={(e) => submitHandler(e)}
                    className="btn-primary">
                    Update
                  </Button>
                </div>
                <div className="col-4">
                  <Button
                    className="btn-secondary "
                    onClick={() => setSelectedReview()}>
                    Ignore
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default ReviewUpdateModal
