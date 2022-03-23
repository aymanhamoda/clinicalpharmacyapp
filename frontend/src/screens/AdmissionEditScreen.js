import React, { useEffect, useState } from 'react'
import { getAdmissionDetails } from '../actions/admissionActions'
import PatientDetails from '../components/PatientDetails'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import ReviewList from '../components/ReviewList'
import FormContainer from '../components/FormContainer'
import ReviewForm from '../components/ReviewForm'
import { Col, Row } from 'react-bootstrap'

const AdmissionEditScreen = ({ match }) => {
  const admissionId = match.params.id

  const [patientId, setPatientId] = useState('')

  const admissionDetails = useSelector((state) => state.admissionDetails)
  const { admission } = admissionDetails

  const dispatch = useDispatch()

  useEffect(() => {
    if (!admission || admission._id !== admissionId) {
      dispatch(getAdmissionDetails(admissionId))
    } else {
      setPatientId(admission.patient)
    }
  }, [dispatch, admissionId, admission, patientId])
  return (
    <>
      {!admission ? (
        <Loader />
      ) : (
        <FormContainer>
          <PatientDetails
            patientId={patientId}
            screenLabel="Admission Edit Screen"
          />
          <div className="pt-5">
            <hr style={{ backgroundColor: 'white' }} />
            <h4 className="lead row justify-content-center">
              Admission Details
            </h4>
            <Row>
              <h6 className="lead">
                {admission.admissionDate.substring(0, 10)}
              </h6>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${admission.admissionDetails}`,
                }}
              />
            </Row>

            <hr style={{ backgroundColor: 'white' }} />
          </div>
          <ReviewList admissionId={admissionId} />
          <ReviewForm
            admissionId={admissionId}
            patientId={patientId}
            teamId={admission.team}
          />
        </FormContainer>
      )}
    </>
  )
}

export default AdmissionEditScreen
