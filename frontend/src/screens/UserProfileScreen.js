import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import UserProfile from '../components/UserProfile'

const UserProfileScreen = () => {
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
      <UserProfile />
    </>
  )
}
export default UserProfileScreen
