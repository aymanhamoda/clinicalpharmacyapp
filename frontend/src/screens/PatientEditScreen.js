import React from 'react'
import PatientVisitList from '../components/PatientVisitList'
import PatientNewVisit from '../components/PatientNewVisit'
import PatientDetails from '../components/PatientDetails'

const PatientEditScreen = ({ match }) => {
  const patientId = match.params.id
  return (
    <>
      <PatientDetails patientId={patientId} />
      <PatientVisitList patientId={patientId} />
      <PatientNewVisit />
    </>
  )
}

export default PatientEditScreen
