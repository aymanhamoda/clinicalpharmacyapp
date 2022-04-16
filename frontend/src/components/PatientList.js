import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
  ListGroupItem,
  Row,
  Col,
  Button,
  FormGroup,
  FormLabel,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'
import Loader from './Loader'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import { listInpatients } from '../actions/patientActions'

const PatientList = ({ teamId }) => {
  const [inpatient, setInpatient] = useState(false)

  const patientRegister = useSelector((state) => state.patientRegister)
  const { error: registerError, loading: loadingRegister } = patientRegister

  const patientList = useSelector((state) => state.patientList)
  const { loading, error, patients } = patientList

  const teamInpatientStore = useSelector((state) => state.teamInpatientStore)
  const { loading: loadInpatients, inpatients } = teamInpatientStore

  const dispatch = useDispatch()
  useEffect(() => {
    if (inpatient) {
      dispatch(listInpatients(teamId))
    }
  }, [teamId, inpatient])
  return (
    <>
      {registerError && <Message variant="danger">{registerError}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loadingRegister && <Loader />}
      <FormGroup className="col-sm-6">
        <FormCheckInput
          checked={inpatient}
          onChange={() => setInpatient(!inpatient)}
          type="checkbox"></FormCheckInput>{' '}
        <FormLabel>Get Inpatients Only</FormLabel>
      </FormGroup>

      {inpatient ? (
        <>
          {loadInpatients ? (
            <Loader />
          ) : (
            <div className="mt-5">
              {inpatients &&
                inpatients.map((inpatient) => (
                  <div key={inpatient._id}>
                    <LinkContainer to={`/patient/${inpatient._id}`}>
                      <ListGroupItem className="d-flex justify-content-between align-items-center border-primary">
                        <Col>
                          <Row className="justify-content-end">
                            <h3 className="row flex-row-reverse">
                              <span className="left-text">
                                {inpatient.firstName}
                              </span>
                              <span className="byline">
                                {' '}
                                {inpatient.middleName}
                              </span>
                              <span className="byline">
                                {' '}
                                {inpatient.lastName}
                              </span>
                            </h3>
                            <br />
                          </Row>
                          <h4 className="row justify-content-end">
                            تاريخ الميلاد:{' '}
                            {inpatient.birthdate.substring(0, 10)}
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
      ) : (
        <>
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
                              <span className="left-text">
                                {patient.firstName}
                              </span>
                              <span className="byline">
                                {' '}
                                {patient.middleName}
                              </span>
                              <span className="byline">
                                {' '}
                                {patient.lastName}
                              </span>
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
      )}
    </>
  )
}

export default PatientList
