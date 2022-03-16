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

const PatientDetails = ({ patientId }) => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nationalID, setNationalID] = useState('')

  const patientDetails = useSelector((state) => state.patientDetails)
  const { loading, error, patient } = patientDetails

  const patientUpdate = useSelector((state) => state.patientUpdate)
  const { loading: loadingUpdate } = patientUpdate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!patient._id || patient._id !== patientId) {
      dispatch(getPatientDetails(patientId))
    } else {
      setFirstName(patient.firstName)
      setMiddleName(patient.middleName)
      setLastName(patient.lastName)
      setBirthdate(patient.birthdate.substring(0, 10))
      setPhone(patient.phone)
      setEmail(patient.email)
      setNationalID(patient.nationalID)
    }

    if (!userInfo) {
      history.push('/')
    }
  }, [
    patient._id,
    patientId,
    userInfo,
    history,
    dispatch,
    patient.firstName,
    patient.middleName,
    patient.lastName,
    patient.birthdate,
    patient.phone,
    patient.email,
    patient.nationalID,
  ])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updatePatient(
        patientId,
        firstName,
        middleName,
        lastName,
        birthdate,
        phone,
        email,
        nationalID
      )
    )
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : loadingUpdate ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <ListGroup onSubmit={submitHandler}>
          <h1>Edit Patient</h1>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId='firstName'>
                  <Form.Control
                    type='name'
                    placeholder='Enter first name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='middleName'>
                  <Form.Control
                    type='name'
                    placeholder='Enter Middle name'
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='lastName'>
                  <Form.Control
                    type='name'
                    placeholder='Enter last name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          <Form>
            <Row>
              <Col>
                <Form.Group controlId='birthdate'>
                  <FormLabel>Birthdate</FormLabel>
                  <Form.Control
                    type='text'
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='phone'>
                  <FormLabel>Phone</FormLabel>
                  <Form.Control
                    type='name'
                    placeholder='Enter phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          <Form>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
          <Form>
            <Form.Group controlId='nationalID'>
              <Form.Label>Enter National ID</Form.Label>
              <Form.Control
                type='nationalID'
                placeholder='Enter nationalID'
                value={nationalID}
                onChange={(e) => setNationalID(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              className='btn btn-info'
              style={{ float: 'right' }}
              type='submit'
            >
              update Patient
            </Button>
          </Form>
        </ListGroup>
      )}
    </>
  )
}

export default PatientDetails
