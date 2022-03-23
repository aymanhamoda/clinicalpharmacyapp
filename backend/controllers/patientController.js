import asyncHandler from 'express-async-handler'
import Patient from '../models/patientModel.js'

// @desc    Register a new patient
// @route   POST /api/patient/:id
// @access  Private
const registerPatient = asyncHandler(async (req, res) => {
  const { firstName, middleName, lastName, birthdate, team } = req.body.patient
  const patient = await Patient.create({
    firstName,
    middleName,
    lastName,
    birthdate,
    team,
  })

  if (patient) {
    res.status(201).json({
      _id: patient._id,
      firstName: patient.firstName,
      middleName: patient.middleName,
      lastName: patient.lastName,
      birthdate: patient.birthdate,
      team: patient.team,
    })
  } else {
    res.status(400)
    throw new Error('email is required')
  }
})

// @desc    Get patient details
// @route   Get /api/users/:id
// @access  Private
const getPatientDetails = asyncHandler(async (req, res) => {
  console.log(req.params.id)
  const patient = await Patient.findById(req.params.id)

  if (patient) {
    res.json(patient)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get Doctor Patients
// @route   GET /api/users/patients/:id
// @access  Private
const getPatients = asyncHandler(async (req, res) => {
  const team = req.params.id
  const pageSize = 6
  const page = Number(req.query.pageNumber) || 1

  const firstName = req.query.firstName
    ? {
        firstName: {
          $regex: req.query.firstName,
          $options: 'i',
        },
      }
    : {}

  const middleName = req.query.middleName
    ? {
        middleName: {
          $regex: req.query.middleName,
          $options: 'i',
        },
      }
    : {}

  const lastName = req.query.lastName
    ? {
        lastName: {
          $regex: req.query.lastName,
          $options: 'i',
        },
      }
    : {}

  const birthdate = req.query.birthdate
    ? {
        birthdate: req.query.birthdate,
      }
    : {}

  const count = await Patient.countDocuments({
    ...firstName,
    ...middleName,
    ...lastName,
    ...birthdate,
  })
  const patients = await Patient.find({
    ...firstName,
    ...middleName,
    ...lastName,
    ...birthdate,
    team,
  })
    .sort({ _id: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  if (patients) {
    res.json({ patients, page, pages: Math.ceil(count / pageSize) })
  } else {
    res.status(404)
    throw new Error('No Patients found.')
  }
})

// @desc    Update a patient
// @route   PUT /api/products/:id
// @access  Private/Admin
const updatePatient = asyncHandler(async (req, res) => {
  const { firstName, middleName, lastName, birthdate } = req.body
  console.log(req.body)
  const patient = await Patient.findById(req.params.id)

  if (patient) {
    patient.firstName = firstName
    patient.middleName = middleName
    patient.lastName = lastName
    patient.birthdate = birthdate

    const updatedPatient = await patient.save()
    res.json(updatedPatient)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { registerPatient, getPatientDetails, getPatients, updatePatient }
