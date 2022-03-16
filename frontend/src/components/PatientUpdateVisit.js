import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button, Col, Form, FormGroup, Image, Modal } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import { useDispatch, useSelector } from 'react-redux'
import { listMedications } from '../actions/medicationActions'
import Message from './Message'
import Loader from './Loader'
import { updateVisit } from '../actions/visitActions'

const PatientUpdateVisit = ({
  id,
  visitDate,
  clinicalFindings,
  images,
  prescriptions,
}) => {
  const [show, setShow] = useState(false)
  const [newClinicalFindings, setNewClinicalFindings] = useState(
    clinicalFindings
  )
  const [newImages, setNewImages] = useState(images)
  const [uploading, setUploading] = useState(false)
  const [newPrescriptions, setNewPrescriptions] = useState(prescriptions)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const patientDetails = useSelector((state) => state.patientDetails)
  const { patient } = patientDetails

  const medicationList = useSelector((state) => state.medicationList)
  const { success, medications } = medicationList

  const handleMedicationChange = (e, prescription) => {
    if (e.length !== 0) {
      prescription.medication = e['0'].label
    }
  }

  const handleDirectionChange = (e, prescription) => {
    prescription.direction = e.target.value
  }

  const deleteRow = (e) => {
    setNewPrescriptions(
      prescriptions.filter((prescription) => prescription !== e)
    )
  }

  const addNewRow = () => {
    setNewPrescriptions([
      ...newPrescriptions,
      { idx: Math.random(), medication: '', direction: '' },
    ])
  }
  const dispatch = useDispatch()

  useEffect(() => {
    if (success) {
      console.log('no')
    } else {
      dispatch(listMedications())
    }
  }, [dispatch, success])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateVisit({
        id,
        visitDate,
        clinicalFindings: newClinicalFindings,
        prescriptions: newPrescriptions,
        images: newImages,
      })
    )
    handleClose()
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
  const addNewImage = () => {
    setNewImages([
      ...images,
      {
        idx: Math.random(),
        path: '',
      },
    ])
  }
  return (
    <>
      <Button variant='primary' onClick={handleShow} style={{ float: 'right' }}>
        Edit visit
      </Button>

      <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {patient.firstName +
              ' ' +
              patient.middleName +
              ' ' +
              patient.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                value={newClinicalFindings}
                onChange={(e) => setNewClinicalFindings(e.target.value)}
              ></textarea>
            </Form.Group>
            <h1>Images</h1>
            {newImages.map((image) => (
              <div key={image.idx}>
                <Form.Group controlId='images'>
                  {image.path && (
                    <Image src={image.path} style={{ height: '100px' }} />
                  )}
                  <Form.Control
                    type='text'
                    placeholder='Enter image url'
                    value={image.path}
                    onChange={(e) => (image.path = e.target.value)}
                  ></Form.Control>
                  <Form.File
                    id='image-file'
                    label='Choose File'
                    custom
                    onChange={(e) => uploadFileHandler(e, image)}
                  ></Form.File>
                </Form.Group>
                <Button onClick={() => addNewImage()}>Add another image</Button>
              </div>
            ))}
            {uploading && <Loader />}
            <h1>Prescriptions</h1>
            {newPrescriptions.map((prescription) => (
              <Form key={prescription.idx} className='form-row'>
                {medications ? (
                  <FormGroup className='col-sm-4'>
                    <Typeahead
                      defaultInputValue={prescription.medication}
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
                      defaultValue={prescription.direction}
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
                )}
              </Form>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>

          <Button variant='primary' type='submit' onClick={submitHandler}>
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PatientUpdateVisit
