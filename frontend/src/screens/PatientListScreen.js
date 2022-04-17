import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Paginate from '../components/Paginate'

import PatientRegister from '../components/PatientRegister'
import PatientList from '../components/PatientList'
import FormContainer from '../components/FormContainer'

const PatientListScreen = ({ match }) => {
  const teamId = match.params.id

  const [showInpatient, setShowInpatient] = useState(false)

  const pageNumber = window.location.search.substring(1)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const patientList = useSelector((state) => state.patientList)
  const { pages, page } = patientList

  const history = useHistory()
  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
  }, [userInfo, history, showInpatient])
  return (
    <FormContainer>
      <PatientRegister teamId={teamId} showInpatient={showInpatient} />
      <PatientList
        pageNumber={pageNumber}
        teamId={teamId}
        showInpatient={showInpatient}
        setShowInpatient={setShowInpatient}
      />
      {/* <Paginate pages={pages} page={page} /> */}
    </FormContainer>
  )
}

export default PatientListScreen
