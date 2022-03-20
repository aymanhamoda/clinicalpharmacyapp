import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Row, Col, FormLabel, FormGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { registerUser } from '../actions/userActions'

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const registeredUser = useSelector((state) => state.registeredUser)
  const { loading, error } = registeredUser

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const history = useHistory()

  useEffect(() => {
    if (userInfo) {
      history.push('/teamlist')
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    setMessage('')
    if (password && password === confirmPassword) {
      dispatch(registerUser(firstName, lastName, email, password))
    }

    if (!password) {
      setMessage('Password is required')
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler} className="form-row">
        <Form.Group controlId="firstName" className="col-sm-6">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="lastName" className="col-sm-6">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="email" className="col-sm-12">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="password" className="col-sm-6">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword" className="col-sm-6">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <FormGroup>
          <Button type="submit" variant="primary">
            Create Account
          </Button>
        </FormGroup>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account <Link to={'/'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
