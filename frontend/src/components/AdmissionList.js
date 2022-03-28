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

  // const updatedAdmission = useSelector((state) => state.updatedAdmission)
  // const { admission: upAdmission } = updatedAdmission

  useEffect(() => {
    if (!patient || patient._id !== patientId) {
      dispatch(getPatientDetails(patientId))
    } else {
      dispatch(listPatientAdmissions(patient._id))
    }
  }, [dispatch, patient, admission])

  return (
    <div className="mt-2">
      {patientLoading || loading || !admissions ? (
        <Loader />
      ) : (
        <>
          <h1 className="row justify-content-center">Admission List</h1>
          {admissions.map((adm) => (
            <div Key={adm._id}>
              <Accordion className="py-2">
                <Accordion.Toggle
                  eventKey={adm._id}
                  as={Card.Header}
                  variant="link">
                  <h6>
                    <i className="fas fa-angle-double-down"></i> Admission Date:{' '}
                    {adm.admissionDate.substring(0, 10)}
                  </h6>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={adm._id}>
                  <div className="container">
                    <Row>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${adm.admissionDetails}`,
                        }}
                      />
                    </Row>
                    <Link
                      className="row text-warning btn btn-outline-success"
                      to={`/admissions/${adm._id}`}>
                      See Reviews
                    </Link>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </div>
          ))}
        </>
      )}

      <AdmissionForm patientId={patientId} />
    </div>
  )
}

export default AdmissionList
