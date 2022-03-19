import asyncHandler from 'express-async-handler'
import Admission from '../models/admissionModel.js'

const createAdmission = asyncHandler(async (req, res) => {
  const { patient, admissionDate, admissionDetails, team } = req.body
  console.log(req.body)
  const admission = await Admission.create({
    patient: patient,
    admissionDate: Date.parse(admissionDate),
    admissionDetails,
    team,
  })

  if (admission) {
    res.status(201).json({
      _id: admission._id,
      admissionDate: admission.admissionDate,
      patient: admission.patientId,
      user: admission.user,
    })
  } else {
    res.status(400)
    throw new Error('email is required')
  }
})

const getPatientAdmissions = asyncHandler(async (req, res) => {
  const patient = req.params.id
  const admissions = await Admission.find({ patient })

  if (admissions) {
    res.json(admissions)
  } else {
    res.status(404)
    throw new Error('Patient not found')
  }
})

const updatePatientAdmission = asyncHandler(async (req, res) => {
  const { admissionDate, dischargeDate } = req.body

  const admission = await Admission.findById(req.params.id)

  if (admission) {
    admission.admissionDate = admissionDate || admission.admissionDate
    admission.dischargeDate = dischargeDate || admission.dischargeDate

    const updatedAdmission = await admission.save()
    res.json(updatedAdmission)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { createAdmission, getPatientAdmissions, updatePatientAdmission }
