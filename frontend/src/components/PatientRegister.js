import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, ListGroup, FormLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import {
  registerPatient,
  listPatient,
} from '../actions/userActions/patientActions'
import FormContainer from './FormContainer'

const PatientRegister = ({ team, pageNumber }) => {
  console.log(team)
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const patientRegister = useSelector((state) => state.patientRegister)
  const { success } = patientRegister

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      listPatient(firstName, middleName, lastName, birthdate, team, pageNumber)
    )
  }, [
    dispatch,
    firstName,
    middleName,
    lastName,
    birthdate,
    pageNumber,
    success,
  ])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      registerPatient({ firstName, middleName, lastName, birthdate, team })
    )
  }

  return (
    <FormContainer>
      <ListGroup onSubmit={submitHandler}>
        <h1>Add New Patient</h1>
        <Form>
          <Row className="form-label justify-content-center pb-2">
            اسم المريض ثلاثي
          </Row>
          <Row className="flex-row-reverse">
            <Form.Group controlId="firstName" className="col-sm-4">
              <Form.Control
                type="name"
                placeholder="اسم المريض"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId="middleName" className="col-sm-4">
              <Form.Control
                type="name"
                placeholder="الاسم الأب"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId="lastName" className="col-sm-4">
              <Form.Control
                type="name"
                placeholder="اسم الجد"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}></Form.Control>
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
                  onChange={(e) => setBirthdate(e.target.value)}></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Form>
          <Button
            className="btn btn-info mb-3"
            style={{ float: 'right' }}
            type="submit">
            Add Patient
          </Button>
        </Form>
      </ListGroup>
    </FormContainer>
  )
}

export default PatientRegister
