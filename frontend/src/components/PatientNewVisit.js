import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Form, Button, FormGroup, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { listMedications } from '../actions/medicationActions'
import { createVisit } from '../actions/visitActions'
import Message from './Message'
import Loader from './Loader'

const PatientNewVisit = () => {
  const [visitDate, setVisitDate] = useState('')
  const [clinicalFindings, setClinicalFindings] = useState('')
  const [images, setImages] = useState([
    {
      idx: 0,
      path: '',
    },
  ])
  const [uploading, setUploading] = useState(false)
  const [prescriptions, setPrescriptions] = useState([
    {
      idx: 0,
      medication: '',
      direction: '',
    },
  ])
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const patientDetails = useSelector((state) => state.patientDetails)
  const { patient } = patientDetails

  const medicationList = useSelector((state) => state.medicationList)
  const { success, medications } = medicationList

  const visitCreate = useSelector((state) => state.visitCreate)
  const { loading } = visitCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const addNewRow = () => {
    setPrescriptions([
      ...prescriptions,
      { idx: Math.random(), medication: '', direction: '' },
    ])
  }

  const addNewImage = () => {
    setImages([
      ...images,
      {
        idx: Math.random(),
        path: '',
      },
    ])
  }

  const deleteImage = (e) => {
    setImages(images.filter((image) => image !== e))
  }

  const handleMedicationChange = (e, prescription) => {
    if (e.length !== 0) {
      prescription.medication = e['0'].label
    }
  }

  const handleDirectionChange = (e, prescription) => {
    prescription.direction = e.target.value
  }

  const deleteRow = (e) => {
    setPrescriptions(prescriptions.filter((prescription) => prescription !== e))
  }

  useEffect(() => {
    if (success) {
      console.log('no')
    } else {
      console.log('lll')
      dispatch(listMedications())
    }
  }, [dispatch, success])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(
      createVisit({
        patient: patient._id,
        doctor: patient.clinicAdmin,
        visitDate: visitDate || Date(),
        clinicalFindings,
        prescriptions,
        images,
      })
    )
  }

  const uploadFileHandler = async (e, image) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      image.path = data
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  return (
    <>
      {message && <Message variant='danger'>{message}</Message>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Form>
            <h1>Add New Visit</h1>
            <Form.Group controlId='visitDate'>
              <Form.Label>
                <h2>Visit Date</h2>
              </Form.Label>
              <Form.Control
                type='date'
                placeholder='Enter National ID'
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='clinicalFindings'>
              <Form.Label>
                <h2>Clinical Details</h2>
              </Form.Label>

              <textarea
                style={{ minHeight: '20px', width: '100%' }}
                wrap='hard'
                rows={10}
                cols={10}
                placeholder='Enter clinicalFindings'
                value={clinicalFindings}
                onChange={(e) => setClinicalFindings(e.target.value)}
              ></textarea>
            </Form.Group>
          </Form>
          <h3>Images</h3>
          {userInfo && !userInfo.isActive ? (
            <h4>
              Your account is
              <span className='byline' style={{ color: 'tomato' }}>
                {' '}
                NOT{' '}
              </span>
              activated, all your data will be saved{' '}
              <span className='byline' style={{ color: 'tomato' }}>
                {' '}
                EXCEPT
              </span>{' '}
              images.
            </h4>
          ) : (
            <h4>
              You had activate your account, your images will be{' '}
              <span className='byline' style={{ color: 'gold' }}>
                {' '}
                SAVED
              </span>
            </h4>
          )}

          {images.map((image) => (
            <Form className='form-row' key={image.idx}>
              <Form.Group controlId='images' className='col-sm-12'>
                {image.path && (
                  <Image src={image.path} style={{ height: '100px' }} />
                )}
                <Form.File
                  id='image-file'
                  label='Choose Image'
                  custom
                  onChange={(e) => uploadFileHandler(e, image)}
                ></Form.File>

                <Button
                  className='btn btn-primary text-center'
                  onClick={() => addNewImage()}
                >
                  <i className='fa fa-plus-circle' aria-hidden='true' />
                </Button>
                {image.i}
                {image.idx !== 0 && (
                  <Button
                    className='btn btn-danger'
                    onClick={() => deleteImage(image)}
                    style={{ float: 'right-bottom' }}
                  >
                    <i className='fa fa-minus' aria-hidden='true' />
                  </Button>
                )}
              </Form.Group>
            </Form>
          ))}
          {uploading && <Loader />}
          <h2>Prescriptions</h2>

          {prescriptions.map((prescription) => (
            <Form className='form-row' key={prescription.idx}>
              {medications ? (
                <FormGroup className='col-sm-4'>
                  <Typeahead
                    placeholder='Enter Medication'
                    options={medications}
                    onChange={(e) => handleMedicationChange(e, prescription)}
                    name='medication'
                    id='basic-example'
                    data-id={prescription.idx}
                  />
                </FormGroup>
              ) : (
                <Loader />
              )}

              {medications && (
                <FormGroup className='col-sm-5'>
                  <input
                    onChange={(e) => handleDirectionChange(e, prescription)}
                    type='text'
                    className='form-control required'
                    placeholder='Direction'
                    name='direction'
                    data-id={prescription.idx}
                    id={prescription.direction}
                  />
                </FormGroup>
              )}

              {medications && (
                <FormGroup className='col-sm-3'>
                  <FormGroup>
                    {' '}
                    <Button
                      onClick={() => addNewRow()}
                      className='btn btn-primary text-center'
                    >
                      <i className='fa fa-plus-circle' aria-hidden='true' />
                    </Button>
                    {prescription.idx !== 0 && (
                      <Button
                        className='btn btn-danger'
                        onClick={() => deleteRow(prescription)}
                      >
                        <i className='fa fa-minus' aria-hidden='true' />
                      </Button>
                    )}
                  </FormGroup>
                </FormGroup>
              )}
            </Form>
          ))}
          <Form onSubmit={submitHandler}>
            <Button
              className='btn btn-info'
              style={{ float: 'right' }}
              type='submit'
            >
              Save Visit
            </Button>
          </Form>
        </>
      )}
    </>
  )
}

export default PatientNewVisit
