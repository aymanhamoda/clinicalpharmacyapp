import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Row, Col, ListGroup, FormLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPatientDetails,
  updatePatient,
} from '../actions/userActions/patientActions'
import Message from './Message'
import Loader from './Loader'
import FormContainer from './FormContainer'
import { getTeamDetails } from '../actions/teamActions'

const PatientDetails = ({ patientId }) => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const teamDetails = useSelector((state) => state.teamDetails)
  const { team } = teamDetails

  const patientDetails = useSelector((state) => state.patientDetails)
  const { loading, error, patient } = patientDetails

  const patientUpdate = useSelector((state) => state.patientUpdate)
  const { loading: loadingUpdate } = patientUpdate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!patient || patient._id !== patientId) {
      dispatch(getPatientDetails(patientId))
    } else {
      setFirstName(patient.firstName)
      setMiddleName(patient.middleName)
      setLastName(patient.lastName)
      setBirthdate(patient.birthdate.substring(0, 10))
      dispatch(getTeamDetails(patient.team))
    }

    if (!userInfo) {
      history.push('/')
    }
  }, [patientId, patient, userInfo, history, dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updatePatient(patientId, firstName, middleName, lastName, birthdate)
    )
  }

  return (
    <>
      {team && (
        <h1 className="text-center text-success text-inline">
          {team.name}
          <span className="text-white"> | Patient Edit Screen</span>
        </h1>
      )}
      {loading || loadingUpdate ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <Form>
              <Row className="form-label justify-content-center pb-2">
                اسم المريض ثلاثي
              </Row>
              <Row className="flex-row-reverse">
                <Form.Group controlId="firstName" className=" col-sm-4">
                  <Form.Control
                    type="name"
                    className="text-center"
                    placeholder="اسم المريض"
                    value={firstName}
                    onChange={(e) =>
                      setFirstName(e.target.value)
                    }></Form.Control>
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
                    onChange={(e) =>
                      setLastName(e.target.value)
                    }></Form.Control>
                </Form.Group>
              </Row>
            </Form>

            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="birthdate">
                    <Row className="form-label justify-content-center pb-2">
                      تاريخ الميلاد
                    </Row>
                    <Form.Control
                      type="date"
                      placeholder="Enter Birthdate"
                      value={birthdate}
                      onChange={(e) =>
                        setBirthdate(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>

            <Form>
              <Button
                className="btn btn-info mb-3"
                style={{ float: 'right' }}
                type="submit">
                Update Patient
              </Button>
            </Form>
          </Form>
        </FormContainer>
      )}
    </>
  )
}

export default PatientDetails
