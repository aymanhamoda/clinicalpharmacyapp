import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, ListGroup, FormLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import {
  registerPatient,
  listPatient,
} from '../actions/userActions/patientActions'

const PatientRegister = ({ pageNumber }) => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [nationalID, setNationalID] = useState('')

  const patientRegister = useSelector((state) => state.patientRegister)
  const { success } = patientRegister

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      listPatient(
        firstName,
        middleName,
        lastName,
        birthdate,
        email,
        phone,
        nationalID,
        pageNumber
      )
    )
  }, [
    dispatch,
    firstName,
    middleName,
    lastName,
    birthdate,
    email,
    phone,
    nationalID,
    pageNumber,
    success,
  ])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      registerPatient(
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
      <ListGroup onSubmit={submitHandler}>
        <h1>Add New Patient</h1>
        <Form>
          <Row>
            <Col>
              <p> Name</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='firstName'>
                <Form.Control
                  type='name'
                  placeholder='first name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='middleName'>
                <Form.Control
                  type='name'
                  placeholder='Middle name'
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='lastName'>
                <Form.Control
                  type='name'
                  placeholder='last name'
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
                  type='date'
                  placeholder='Enter Birthdate'
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='phone'>
                <FormLabel>
                  <span>
                    Phone
                    <span className='byline' style={{ color: 'gold' }}>
                      {' '}
                      (optional)
                    </span>
                  </span>
                </FormLabel>
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
            <Form.Label>
              <span>
                Email
                <span className='byline' style={{ color: 'gold' }}>
                  {' '}
                  (optional)
                </span>
              </span>
            </Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='nationalID'>
            <Form.Label>
              <span>
                National ID
                <span className='byline' style={{ color: 'gold' }}>
                  {' '}
                  (optional)
                </span>
              </span>
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter National ID'
              value={nationalID}
              onChange={(e) => setNationalID(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            className='btn btn-info'
            style={{ float: 'right' }}
            type='submit'
          >
            Add Patient
          </Button>
        </Form>
      </ListGroup>
    </>
  )
}

export default PatientRegister
