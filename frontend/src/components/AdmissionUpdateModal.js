import React, { useEffect, useState } from 'react'
import { Form, Button, Modal, ModalBody } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Message from './Message'
import { updateAdmission } from '../actions/admissionActions'

const AdmissionUpdateModal = ({ selectedAdmission, setSelectedAdmission }) => {
  const [admissionId, setAdmissionId] = useState('')
  const [admissionDate, setAdmissionDate] = useState('')
  const [dischargeDate, setDischargeDate] = useState('')
  const [admissionDetails, setAdmissionDetails] = useState('')

  const [message, setMessage] = useState('')

  const [showModaL, setShowModaL] = useState(false)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateAdmission({
        _id: admissionId,
        admissionDate: admissionDate,
        dischargeDate: dischargeDate,
        admissionDetails,
      })
    )
    setSelectedAdmission()
  }

  useEffect(() => {
    if (selectedAdmission) {
      setAdmissionId(selectedAdmission._id)
      setAdmissionDate(selectedAdmission.admissionDate.substring(0, 10))
      setAdmissionDetails(selectedAdmission.admissionDetails)
      if (selectedAdmission.dischargeDate) {
        setDischargeDate(selectedAdmission.dischargeDate.substring(0, 10))
      }
      setShowModaL(true)
    } else {
      setAdmissionId('')
      setAdmissionDate('')
      setAdmissionDetails('')
      setDischargeDate('')
      setShowModaL(false)
    }
  }, [selectedAdmission, showModaL])

  return (
    <>
      {message && <Message variant="danger">{message}</Message>}

      <Modal
        show={showModaL}
        size="lg"
        onHide={() => setSelectedAdmission()}
        backdrop="static"
        keyboard={false}>
        <ModalBody>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="admissionDate">
              <Form.Label>
                <h2>Admission Date</h2>
              </Form.Label>
              <Form.Control
                type="date"
                value={admissionDate}
                onChange={(e) =>
                  setAdmissionDate(e.target.value)
                }></Form.Control>
            </Form.Group>

            <div className="text-dark">
              <Form.Label>
                <h2 className="text-white">Clinical Details</h2>
              </Form.Label>

              <CKEditor
                editor={ClassicEditor}
                data={admissionDetails}
                onChange={(event, editor) => {
                  const data = editor.getData()
                  setAdmissionDetails(data)
                }}
              />
            </div>

            <Form.Group controlId="dischargeDate" className="py-3">
              <Form.Label>
                <h2>Discharge Date</h2>
              </Form.Label>
              <Form.Control
                type="date"
                value={dischargeDate}
                onChange={(e) =>
                  setDischargeDate(e.target.value)
                }></Form.Control>
            </Form.Group>

            <Form.Group className="py-3">
              <Button className="btn btn-info float-right" type="submit">
                Update
              </Button>
              <Button
                className="btn btn-info float-right mx-2"
                onClick={() => setSelectedAdmission()}>
                Close
              </Button>
            </Form.Group>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

export default AdmissionUpdateModal
