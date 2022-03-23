import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { ListGroupItem, Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Message from './Message'
import Loader from './Loader'
import FormContainer from './FormContainer'

const PatientList = () => {
  const patientRegister = useSelector((state) => state.patientRegister)
  const { error: registerError, loading: loadingRegister } = patientRegister

  const patientList = useSelector((state) => state.patientList)
  const { loading, error, patients } = patientList

  return (
    <>
      {registerError && <Message variant="danger">{registerError}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loadingRegister && <Loader />}

      {loading ? (
        <Loader />
      ) : (
        <div className="mt-5">
          {patients &&
            patients.map((patient) => (
              <div key={patient._id}>
                <LinkContainer to={`/patient/${patient._id}`}>
                  <ListGroupItem className="d-flex justify-content-between align-items-center border-primary">
                    <Col>
                      <Row className="justify-content-end">
                        <h3 className="row flex-row-reverse">
                          <span className="left-text">{patient.firstName}</span>
                          <span className="byline"> {patient.middleName}</span>
                          <span className="byline"> {patient.lastName}</span>
                        </h3>
                        <br />
                      </Row>
                      <h4 className="row justify-content-end">
                        تاريخ الميلاد: {patient.birthdate.substring(0, 10)}
                      </h4>
                      <Button className="btn btn-info">Show</Button>
                    </Col>
                  </ListGroupItem>
                </LinkContainer>
                &nbsp;
              </div>
            ))}
        </div>
      )}
    </>
  )
}

export default PatientList
