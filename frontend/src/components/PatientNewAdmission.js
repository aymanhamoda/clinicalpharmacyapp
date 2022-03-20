import React, { useEffect, useState } from 'react'
import { Form, Button, FormGroup, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Message from './Message'
import Loader from './Loader'
import { createAdmission } from '../actions/admissionActions'
import FormContainer from './FormContainer'
import { getPatientDetails } from '../actions/userActions/patientActions'

const PatientNewAdmission = ({ patientId }) => {
  const [admissionDate, setAdmissionDate] = useState(new Date())
  const [admissionDetails, setAdmissionDetails] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const patientDetails = useSelector((state) => state.patientDetails)
  const { patient } = patientDetails

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createAdmission({
        patient: patientId,
        admissionDate: admissionDate,
        admissionDetails,
        team: patient.team,
      })
    )
  }

  useEffect(() => {
    if (!patient) {
      dispatch(getPatientDetails(patientId))
    }
  }, [dispatch, patient])

  return (
    <FormContainer>
      {message && <Message variant="danger">{message}</Message>}

      <>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="admissionDate">
            <Form.Label>
              <h2>Admission Date</h2>
            </Form.Label>
            <Form.Control
              type="date"
              value={admissionDate}
              onChange={(e) => setAdmissionDate(e.target.value)}></Form.Control>
          </Form.Group>

          <div className="text-dark">
            <Form.Label>
              <h2 className="text-white">Clinical Details</h2>
            </Form.Label>
            <CKEditor
              className="text-dark"
              editor={ClassicEditor}
              data={admissionDetails}
              onChange={(event, editor) => {
                const data = editor.getData()
                setAdmissionDetails(data)
              }}
            />
          </div>
          <Form.Group className="py-3">
            <Button className="btn btn-info float-right" type="submit">
              Add New Admission
            </Button>
          </Form.Group>
        </Form>
      </>
    </FormContainer>
  )
}

export default PatientNewAdmission
