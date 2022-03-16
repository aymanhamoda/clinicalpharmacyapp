import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Col, Row } from 'react-bootstrap'

import Meta from '../components/Meta'
import LoginComponent from '../components/LoginComponent'

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const history = useHistory()

  useEffect(() => {
    if (userInfo) {
      history.push('/teamlist')
    }
  }, [history, userInfo])

  return (
    <>
      <Meta />
      <LoginComponent />
    </>
  )
}

export default HomeScreen
