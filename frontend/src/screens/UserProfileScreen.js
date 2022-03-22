import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { USER_DETAILS_RESET } from '../constants/userConstants'
import { useHistory } from 'react-router-dom'

const UserProfile = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState()

  const dispatch = useDispatch()
  const history = useHistory()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const updatedUserDetails = useSelector((state) => state.updatedUserDetails)
  const { user: updatedUser, loading, error } = updatedUserDetails

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      setMessage('')
      dispatch(
        updateUserProfile({
          firstName,
          lastName,
          email,
          password,
        })
      )
    }
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
    if (updatedUser) {
      dispatch({ type: USER_DETAILS_RESET })
    }
    if (userInfo && !user) {
      dispatch(getUserDetails(userInfo._id))
    }
    if (user) {
      setFirstName(user.firstName)
      setLastName(user.lastName)
      setEmail(user.email)
    }
  }, [dispatch, userInfo, user, loading, updatedUser, history])

  return (
    <FormContainer>
      {message && <Message variant="danger">{message}</Message>}
      {!user ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h3>Your Profile</h3>
          <>
            <Form onSubmit={submitHandler}>
              <Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Control
                      type="name"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={(e) =>
                        setFirstName(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Control
                      type="name"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={(e) =>
                        setLastName(e.target.value)
                      }></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  readOnly
                  value={email}></Form.Control>
              </Form.Group>

              <h1>Change Password</h1>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}></Form.Control>
              </Form.Group>

              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  autoComplete="new-password"
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }></Form.Control>
              </Form.Group>

              <Button
                className="btn btn-info"
                style={{ float: 'right' }}
                type="submit">
                Update Details
              </Button>
            </Form>
          </>
        </>
      )}
    </FormContainer>
  )
}

export default UserProfile
