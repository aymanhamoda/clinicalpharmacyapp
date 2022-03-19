import React from 'react'
import PatientAdmissionList from '../components/PatientAdmissionList'
import PatientDetails from '../components/PatientDetails'

const PatientEditScreen = ({ match }) => {
  const patientId = match.params.id
  return (
    <>
      <PatientDetails patientId={patientId} />
      <PatientAdmissionList patientId={patientId} />
    </>
  )
}

export default PatientEditScreen
