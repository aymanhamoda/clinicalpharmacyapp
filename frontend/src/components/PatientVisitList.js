import React, { useEffect } from 'react'
import { Card, Accordion, Image, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { getPatientDetails } from '../actions/userActions/patientActions'
import { listPatientVisits } from '../actions/visitActions'
import { LinkContainer } from 'react-router-bootstrap'
import PatientUpdateVisit from './PatientUpdateVisit'

const PatientVisitList = ({ patientId }) => {
  const dispatch = useDispatch()

  const patientDetails = useSelector((state) => state.patientDetails)
  const { loading: patientLoading, patient } = patientDetails

  const patientVisitList = useSelector((state) => state.patientVisitList)
  const { loading, visits, error } = patientVisitList

  const visitCreate = useSelector((state) => state.visitCreate)
  const { success } = visitCreate

  const visitUpdate = useSelector((state) => state.visitUpdate)
  const { success: successVisitUpdate } = visitUpdate

  useEffect(() => {
    if (!patient._id || patient._id !== patientId) {
      dispatch(getPatientDetails(patientId))
    } else {
      dispatch(listPatientVisits(patient._id, patient.clinicAdmin))
    }
  }, [
    patient._id,
    patientId,
    patient.clinicAdmin,
    dispatch,
    success,
    successVisitUpdate,
  ])

  return (
    <>
      {patientLoading ? (
        <Loader />
      ) : loading ? (
        <Loader />
      ) : error ? (
        console.log(error)
      ) : (
        <>
          &nbsp;
          {visits.map((visit) => (
            <Accordion>
              <Accordion.Toggle
                eventKey={visit._id}
                as={Card.Header}
                variant='link'
              >
                <h3 className='text-left-right'>
                  Visit Date: {visit.visitDate.substring(0, 10)}
                </h3>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={visit._id}>
                <div>
                  <pre
                    style={{
                      backgroundColor: 'white',
                      padding: '20px',
                      color: 'black',
                      fontFamily: 'sans-serif',
                      lineHeight: 'normal',
                    }}
                  >
                    <h2 style={{ fontWeight: 'bold' }}> Clinical Findings</h2>
                    <h4 className='lead' className='text-left-right'>
                      <span>{visit.clinicalFindings}</span>
                    </h4>
                  </pre>
                </div>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey={visit._id}>
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    color: 'black',
                    fontFamily: 'sans-serif',
                    lineHeight: 'normal',
                  }}
                >
                  <h2 style={{ fontWeight: 'bold' }}> Images</h2>
                  {visit.images.map((image) => (
                    <div key={image._id}>
                      <Image src={image.path} fluid />
                    </div>
                  ))}
                </div>
              </Accordion.Collapse>
              &nbsp;
              <Accordion.Collapse eventKey={visit._id}>
                <>
                  <div
                    style={{
                      backgroundColor: 'white',
                      padding: '20px',
                      color: 'black',
                      fontFamily: 'sans-serif',
                      lineHeight: 'normal',
                    }}
                  >
                    <h2 style={{ fontWeight: 'bold' }}> Prescriptions</h2>
                    {visit.prescriptions.map((prescription) => (
                      <div key={prescription._id}>
                        <h4 className='lead' className='text-left-right'>
                          <span>{prescription.medication} </span>
                          <span className='byline'>
                            {' '}
                            {prescription.direction}
                          </span>
                        </h4>
                      </div>
                    ))}
                    <LinkContainer to={`/printprescription/${visit._id}`}>
                      <Button>Print</Button>
                    </LinkContainer>
                    <PatientUpdateVisit
                      id={visit._id}
                      visitDate={visit.visitDate.substring(0, 10)}
                      clinicalFindings={visit.clinicalFindings}
                      images={visit.images}
                      prescriptions={visit.prescriptions}
                    />
                  </div>
                </>
              </Accordion.Collapse>
              &nbsp;
            </Accordion>
          ))}
        </>
      )}
    </>
  )
}

export default PatientVisitList
