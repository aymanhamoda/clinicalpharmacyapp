import React, { useState, useEffect } from 'react'
import {
  Form,
  Button,
  Row,
  Col,
  ListGroup,
  FormLabel,
  Container,
  FormGroup,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPatientDetails, updatePatient } from '../actions/patientActions'
import Message from './Message'
import Loader from './Loader'
import { getTeamDetails } from '../actions/teamActions'

const PatientDetails = ({ patientId, screenLabel }) => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const teamDetails = useSelector((state) => state.teamDetails)
  const { team } = teamDetails

  const patientDetails = useSelector((state) => state.patientDetails)
  const { error, patient } = patientDetails

  const patientUpdate = useSelector((state) => state.patientUpdate)
  const { loading } = patientUpdate

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updatePatient(patientId, firstName, middleName, lastName, birthdate)
    )
  }

  useEffect(() => {
    if (!patient || patient._id !== patientId || loading) {
      dispatch(getPatientDetails(patientId))
    } else {
      setFirstName(patient.firstName)
      setMiddleName(patient.middleName)
      setLastName(patient.lastName)
      setBirthdate(patient.birthdate)
      dispatch(getTeamDetails(patient.team))
    }
  }, [patientId, patient, patientId, dispatch, loading])

  return (
    <>
      {team && (
        <h1 className="text-center text-success text-inline">
          {team.name}
          <span className="text-white"> | {screenLabel}</span>
        </h1>
      )}
      {!patient ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Form onSubmit={submitHandler}>
            <Row className="justify-content-end mr-2 pb-2">
              <p>اسم المريض ثلاثي</p>{' '}
            </Row>
            <Row className="flex-row-reverse">
              <Form.Group controlId="firstName" className=" col-sm-4">
                <Form.Control
                  type="name"
                  className="text-center"
                  placeholder="اسم المريض"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}></Form.Control>
              </Form.Group>

              <Form.Group controlId="middleName" className="col-sm-4">
                <Form.Control
                  type="name"
                  className="text-center"
                  placeholder="الاسم الأب"
                  value={middleName}
                  onChange={(e) =>
                    setMiddleName(e.target.value)
                  }></Form.Control>
              </Form.Group>

              <Form.Group controlId="lastName" className="col-sm-4">
                <Form.Control
                  type="name"
                  className="text-center"
                  placeholder="اسم الجد"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}></Form.Control>
              </Form.Group>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="birthdate">
                  <Row className="form-label justify-content-end mr-2 pb-2">
                    تاريخ الميلاد
                  </Row>
                  <Form.Control
                    className="text-center"
                    type="date"
                    value={birthdate.substring(0, 10)}
                    onChange={(e) =>
                      setBirthdate(e.target.value)
                    }></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <FormGroup>
              <Button
                className="btn btn-info mb-3"
                style={{ float: 'right' }}
                type="submit">
                Update Patient
              </Button>
            </FormGroup>
          </Form>
        </div>
      )}
    </>
  )
}

export default PatientDetails
