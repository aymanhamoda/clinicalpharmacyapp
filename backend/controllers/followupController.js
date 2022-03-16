import asyncHandler from 'express-async-handler'
import Followup from '../models/followupModel.js'

const createFollowup = asyncHandler(async (req, res) => {
  const { patientId, date, clinicalNote, errorNotes, userId, admissionId } =
    req.body

  const followup = await Followup.create({
    patient: patientId,
    admission: admissionId,
    date,
    clinicalNote,
    errorNotes,
    user: userId,
  })

  if (followup) {
    res.status(201).json({
      _id: followup._id,
      date: followup.date,
      admission: followup.admission,
      clinicalNote: followup.clinicalNote,
      errorNotes: followup.errorNotes,
      patient: followup.patientId,
      user: followup.user,
    })
  } else {
    res.status(400)
    throw new Error('email is required')
  }
})

const getPatientFollowups = asyncHandler(async (req, res) => {
  const patient = req.params.id
  const followup = await Followup.find({ patient })

  if (followup) {
    res.json(followup)
  } else {
    res.status(404)
    throw new Error('Patient not found')
  }
})

const updatePatientFollowup = asyncHandler(async (req, res) => {
  const { date, clinicalNote, errorNotes, userId } = req.body

  const followup = await Followup.findById(req.params.id)
  console.log(followup.user)
  if (followup && followup.user.toString() === userId.toString()) {
    followup.date = date || followup.date
    followup.clinicalNote = clinicalNote || followup.clinicalNote
    followup.errorNotes = errorNotes || followup.errorNotes

    const updatedFollowup = await followup.save()
    res.json(updatedFollowup)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { createFollowup, getPatientFollowups, updatePatientFollowup }
