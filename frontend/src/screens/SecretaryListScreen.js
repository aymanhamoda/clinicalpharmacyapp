import React, { useState, useEffect } from 'react'
import {
  Form,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  FormLabel,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { deleteUser } from '../actions/userActions'
import {
  listSecretary,
  registerSecretary,
} from '../actions/userActions/secretaryActions'

const AdminSecretary = ({ location, history }) => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const secretaryList = useSelector((state) => state.secretaryList)
  const { loading, error, secretaries } = secretaryList

  const secretaryRegister = useSelector((state) => state.secretaryRegister)
  const { error: errorRegister } = secretaryRegister

  const userDelete = useSelector((state) => state.userDelete)
  const { success } = userDelete

  useEffect(() => {
    dispatch(listSecretary(userInfo._id))
  }, [success, dispatch, userInfo])

  const deleteSecretary = (id) => {
    dispatch(deleteUser(id))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(
        registerSecretary(
          firstName,
          middleName,
          lastName,
          birthdate,
          phone,
          email,
          password
        )
      )
      dispatch(listSecretary(userInfo._id))
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : message ? (
        <Message variant='danger'>{message}</Message>
      ) : errorRegister ? (
        <Message variant='danger'>{errorRegister}</Message>
      ) : (
        <>
          <h1>Your Secretary</h1>

          {secretaries.map((secretary) => (
            <ListGroup key={secretary._id}>
              <ListGroupItem className='d-flex justify-content-between align-items-center'>
                <h3 className='text-left-right'>
                  <span className='left-text'>{secretary.firstName}</span>
                  <span className='byline'> {secretary.middleName}</span>
                  <span className='byline'> {secretary.lastName}</span>
                </h3>
                <Button
                  className='btn btn-danger'
                  onClick={() => deleteSecretary(secretary._id)}
                >
                  <i class='fas fa-trash'></i>
                </Button>
              </ListGroupItem>
            </ListGroup>
          ))}
        </>
      )}
      <ListGroup onSubmit={submitHandler}>
        <h1>Add New Secretary</h1>

        <Form>
          <Row>
            <Col>
              <Form.Group controlId='firstName'>
                <Form.Control
                  type='name'
                  placeholder='Enter first name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='middleName'>
                <Form.Control
                  type='name'
                  placeholder='Enter Middle name'
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='lastName'>
                <Form.Control
                  type='name'
                  placeholder='Enter last name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Form>
          <Row>
            <Col>
              <Form.Group controlId='birthdate'>
                <FormLabel>Birthdate</FormLabel>
                <Form.Control
                  type='date'
                  placeholder='Enter Birthdate'
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='phone'>
                <FormLabel>Phone</FormLabel>
                <Form.Control
                  type='name'
                  placeholder='Enter phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Form>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password for secretary</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button
            className='btn btn-info'
            style={{ float: 'right' }}
            type='submit'
          >
            Create New Secretary Account
          </Button>
        </Form>
      </ListGroup>
    </>
  )
}

export default AdminSecretary
