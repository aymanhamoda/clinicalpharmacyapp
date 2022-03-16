import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import DoctorProfile from '../components/DoctorProfile'

const DoctorScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const history = useHistory()

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
  }, [history, userInfo])
  return (
    <>
      <DoctorProfile />
    </>
  )
}
export default DoctorScreen
