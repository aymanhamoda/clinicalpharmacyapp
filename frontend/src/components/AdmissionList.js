import React, { useEffect } from 'react'
import { Card, Accordion, Col, Button, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { getPatientDetails } from '../actions/patientActions'
import { listPatientAdmissions } from '../actions/admissionActions'
import FormContainer from './FormContainer'
import AdmissionForm from './AdmissionForm'
import { Link } from 'react-router-dom'

const AdmissionList = ({ patientId }) => {
  const dispatch = useDispatch()

  const patientDetails = useSelector((state) => state.patientDetails)
  const { loading: patientLoading, patient } = patientDetails

  const admissionList = useSelector((state) => state.admissionList)
  const { loading, admissions, error } = admissionList

  const createdAdmission = useSelector((state) => state.createdAdmission)
  const { admission } = createdAdmission

  const updatedAdmission = useSelector((state) => state.updatedAdmission)
  const { admission: upAdmission } = updatedAdmission

  useEffect(() => {
    if (!patient || patient._id !== patientId) {
      dispatch(getPatientDetails(patientId))
    } else {
      dispatch(listPatientAdmissions(patient._id))
    }
  }, [dispatch, patient, admission])

  return (
    <>
      {patientLoading || loading ? (
        <Loader />
      ) : (
        <FormContainer>
          <h1>Admission List</h1>
          {admissions.map((admission) => (
            <div Key={admission._id}>
              <Accordion className="py-2">
                <Accordion.Toggle
                  eventKey={admission._id}
                  as={Card.Header}
                  variant="link">
                  <h6>
                    Admission Date: {admission.admissionDate.substring(0, 10)}
                  </h6>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={admission._id}>
                  <div className="container">
                    <Row>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${admission.admissionDetails}`,
                        }}
                      />
                    </Row>
                    <Link
                      className="row float-right text-warning"
                      to={`/admissions/${admission._id}`}>
                      <i className="fas fa-edit"></i> Edit
                    </Link>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </div>
          ))}
        </FormContainer>
      )}

      <AdmissionForm patientId={patientId} />
    </>
  )
}

export default AdmissionList
