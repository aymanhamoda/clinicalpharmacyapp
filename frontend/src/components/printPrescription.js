import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const PrintPrescription = ({ match }) => {
  const _id = match.params.id

  const patientAdmissionList = useSelector(
    (state) => state.patientAdmissionList
  )
  const { admissions } = patientAdmissionList

  const admission = admissions.find((visit) => {
    return visit._id === _id
  })

  useEffect(() => {
    window.print()
    window.history.back()
  }, [])
  return (
    <>
      {' '}
      <Row>bsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp;</Row>
      {admission.prescriptions.map((prescription) => (
        <div style={{ top: '40%', color: 'black' }} key={prescription._id}>
          <Col>
            <Row>
              <h1>{prescription.medication}</h1>
            </Row>
            <Row>
              <h1 style={{ textIndent: '20px' }}> {prescription.direction}</h1>
            </Row>
          </Col>
        </div>
      ))}
    </>
  )
}
