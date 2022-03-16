import React, { useState, useEffect } from 'react'
import {
  ListGroup,
  FormLabel,
  Form,
  Button,
  Row,
  Col,
  Accordion,
  Card,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './Message'
import Loader from './Loader'
import {
  getDoctorDetails,
  updateDoctorProfile,
} from '../actions/userActions/doctorActions'
import specialityList from '../data/speciality'

const DoctorProfile = () => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const doctorDetails = useSelector((state) => state.doctorDetails)
  const { loading, error, doctor } = doctorDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const doctorUpdateProfile = useSelector((state) => state.doctorUpdateProfile)
  const { loading: loadingDetails, success } = doctorUpdateProfile

  useEffect(() => {
    if (userInfo) {
      if (!doctor || !doctor.firstName) {
        dispatch(getDoctorDetails(userInfo._id))
      } else {
        setFirstName(doctor.firstName)
        setMiddleName(doctor.middleName)
        setLastName(doctor.lastName)
        setBirthdate(doctor.birthdate.substring(0, 10))
        setSpeciality(doctor.speciality)
        setPhone(doctor.phone)
        setEmail(doctor.email)
      }
    }
  }, [dispatch, userInfo, doctor])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      setMessage('')
      dispatch(
        updateDoctorProfile({
          _id: doctor._id,
          firstName,
          middleName,
          lastName,
          birthdate,
          speciality,
          phone,
          email,
          password,
        })
      )
    }
  }

  return (
    <>
      {success && <Message variant='success'>Details Updated</Message>}
      {message && <Message variant='danger'>{message}</Message>}
      {loading ? (
        <Loader />
      ) : loadingDetails ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <>
            <h3>Your Profile</h3>
          </>
          &nbsp;
          <>
            <ListGroup onSubmit={submitHandler}>
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
                        type='text'
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
                    readOnly
                    value={email}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId='speciality'>
                  <FormLabel>Speciality</FormLabel>
                  <select
                    className='custom-select'
                    type='name'
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                  >
                    {specialityList.map((specialityItem) => (
                      <option
                        value={specialityItem._id}
                        disabled={specialityItem.disabled}
                      >
                        {specialityItem.name}
                      </option>
                    ))}
                  </select>
                </Form.Group>
              </Form>
              <h1>Change Password</h1>
              <Form>
                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    autoComplete='new-password'
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    autoComplete='new-password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Form>
              <Form>
                <Button
                  className='btn btn-info'
                  style={{ float: 'right' }}
                  type='submit'
                >
                  Update Details
                </Button>
              </Form>
            </ListGroup>
          </>
        </>
      )}
    </>
  )
}

export default DoctorProfile
