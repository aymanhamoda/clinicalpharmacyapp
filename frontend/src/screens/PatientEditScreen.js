import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AdmissionList from '../components/AdmissionList'
import PatientDetails from '../components/PatientDetails'

const PatientEditScreen = ({ match }) => {
  const patientId = match.params.id

  const history = useHistory()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
  }, [history])

  return (
    <>
      <PatientDetails patientId={patientId} screenLabel="Patient Edit Screen" />
      <AdmissionList patientId={patientId} />
    </>
  )
}

export default PatientEditScreen
