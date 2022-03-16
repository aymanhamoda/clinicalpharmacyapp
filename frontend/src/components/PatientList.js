import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { ListGroupItem, Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Message from './Message'
import Loader from './Loader'

const PatientList = () => {
  const patientRegister = useSelector((state) => state.patientRegister)
  const { error: registerError, loading: loadingRegister } = patientRegister

  const patientList = useSelector((state) => state.patientList)
  const { loading, error, patients } = patientList

  return (
    <>
      {registerError && <Message variant='danger'>{registerError}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loadingRegister && <Loader />}

      {loading ? (
        <Loader />
      ) : (
        <>
          &nbsp;
          {patients &&
            patients.map((patient) => (
              <div key={patient._id}>
                <LinkContainer to={`/doctor/patient/${patient._id}`}>
                  <ListGroupItem className='d-flex justify-content-between align-items-center border-primary'>
                    <Col>
                      <Row>
                        <h3 className='text-left-right'>
                          <span className='left-text'>{patient.firstName}</span>
                          <span className='byline'> {patient.middleName}</span>
                          <span className='byline'> {patient.lastName}</span>
                        </h3>
                      </Row>
                      <Row>Birthdate: {patient.birthdate.substring(0, 10)}</Row>
                      <Row>Phone: {patient.phone}</Row>
                      <Row>National ID:{patient.nationalID}</Row>
                      <Button
                        style={{ float: 'right' }}
                        className='btn btn-info'
                      >
                        Edit
                      </Button>
                    </Col>
                  </ListGroupItem>
                </LinkContainer>
                &nbsp;
              </div>
            ))}
        </>
      )}
    </>
  )
}

export default PatientList
