import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTeamDetails } from '../actions/teamActions'

import { registerPatient, listPatient } from '../actions/patientActions'

const PatientRegister = ({ teamId, pageNumber, showInpatient }) => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')

  const patientRegister = useSelector((state) => state.patientRegister)
  const { success } = patientRegister

  const teamDetails = useSelector((state) => state.teamDetails)
  const { team } = teamDetails

  const dispatch = useDispatch()

  useEffect(() => {
    if (!team || teamId !== team._id) {
      dispatch(getTeamDetails(teamId))
    } else {
      dispatch(
        listPatient(
          firstName,
          middleName,
          lastName,
          birthdate,
          teamId,
          pageNumber
        )
      )
    }
  }, [
    dispatch,
    success,
    teamId,
    team,
    firstName,
    middleName,
    lastName,
    birthdate,
    showInpatient,
  ])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      registerPatient({ firstName, middleName, lastName, birthdate, team })
    )
  }

  return (
    <>
      <Form onSubmit={submitHandler}>
        {team && (
          <h1 className="text-center text-success">
            {team.name}{' '}
            <span className="text-white"> | Patient List Screen</span>
          </h1>
        )}
        <h6>Serach | Add New Patient</h6>

        <Row className="justify-content-center pb-2">اسم المريض ثلاثي</Row>
        <Row className="flex-row-reverse">
          <Form.Group controlId="firstName" className="col-sm-4">
            <Form.Control
              className="text-center"
              type="name"
              disabled={showInpatient}
              placeholder="اسم المريض"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="middleName" className="col-sm-4">
            <Form.Control
              type="name"
              disabled={showInpatient}
              className="text-center"
              placeholder="الاسم الأب"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="lastName" className="col-sm-4">
            <Form.Control
              type="name"
              className="text-center"
              placeholder="اسم الجد"
              disabled={showInpatient}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}></Form.Control>
          </Form.Group>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="birthdate">
              <Row className="form-label justify-content-center pb-2">
                تاريخ الميلاد
              </Row>
              <Form.Control
                type="date"
                disabled={showInpatient}
                placeholder="Enter Birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="row justify-content-end mr-2">
          <Button
            className="btn btn-info"
            type="submit"
            disabled={showInpatient}>
            Add Patient
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default PatientRegister
