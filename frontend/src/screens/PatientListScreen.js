import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Paginate from '../components/Paginate'

import PatientRegister from '../components/PatientRegister'
import PatientList from '../components/PatientList'

const PatientListScreen = ({ match }) => {
  const teamId = match.params.id

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
  }, [userInfo, history])
  return (
    <>
      <PatientRegister teamId={teamId} />
      <PatientList pageNumber={pageNumber} />
      <Paginate pages={pages} page={page} />
    </>
  )
}

export default PatientListScreen
