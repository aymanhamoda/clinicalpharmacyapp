import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getAdmissionDetails } from '../actions/admissionActions'
import PatientDetails from '../components/PatientDetails'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import ReviewList from '../components/ReviewList'
import FormContainer from '../components/FormContainer'
import ReviewForm from '../components/ReviewForm'
import { listDrugLabels } from '../actions/drugActions'
import { listDrugErrTypes } from '../actions/errTypeActions'

const AdmissionEditScreen = ({ match }) => {
  const admissionId = match.params.id

  const [patientId, setPatientId] = useState('')

  const admissionDetails = useSelector((state) => state.admissionDetails)
  const { admission } = admissionDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const drugList = useSelector((state) => state.drugList)
  const { drugs } = drugList

  const errTypes = useSelector((state) => state.errTypes)
  const { errTypeList } = errTypes

  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfo) {
      if (!admission || admission._id !== admissionId) {
        dispatch(getAdmissionDetails(admissionId))
      } else {
        setPatientId(admission.patient)
      }
    } else {
      history.push('/')
    }
    if (!drugs) {
      dispatch(listDrugLabels())
    }
    if (!errTypeList) {
      dispatch(listDrugErrTypes())
    }
  }, [
    dispatch,
    admissionId,
    admission,
    patientId,
    history,
    userInfo,
    errTypeList,
    drugs,
  ])
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
              ADMISSION DETAILS
            </h4>

            <h6 className="row lead pl-3">
              {admission.admissionDate.substring(0, 10)}
            </h6>
            <div
              className="text-warning"
              dangerouslySetInnerHTML={{
                __html: `${admission.admissionDetails}`,
              }}
            />

            <hr style={{ backgroundColor: 'gold' }} />
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
