import asyncHandler from 'express-async-handler'
import Review from '../models/reviewModel.js'

const createPatientReview = asyncHandler(async (req, res) => {
  const {
    patientId,
    admissionId,
    userId,
    teamId,
    reviewDate,
    clinicalNote,
    drugErrs,
  } = req.body.review
  console.log(req.body)
  const review = await Review.create({
    patient: patientId,
    admission: admissionId,
    user: userId,
    team: teamId,
    reviewDate,
    clinicalNote,
    drugErrs,
  })

  if (review) {
    res.status(201).json({
      _id: review._id,
      patient: review.patientId,
      admission: review.admission,
      user: review.user,
      date: review.date,
      clinicalNote: review.clinicalNote,
      drugErrs: review.drugErrs,
    })
  } else {
    res.status(400)
    throw new Error('email is required')
  }
})

const getPatientReviews = asyncHandler(async (req, res) => {
  const patient = req.params.id
  const admission = req.query.admissionId
  const review = await Review.find({ patient, admission })

  if (review) {
    res.json(review)
  } else {
    res.status(404)
    throw new Error('Patient not found')
  }
})

const updatePatientReview = asyncHandler(async (req, res) => {
  const { date, clinicalNote, drugErrs, userId } = req.body

  const review = await Review.findById(req.params.id)

  if (review && review.user.toString() === userId.toString()) {
    review.date = date
    review.clinicalNote = clinicalNote
    review.drugErrs = drugErrs

    const updatedReview = await review.save()
    res.json(updatedReview)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { createPatientReview, getPatientReviews, updatePatientReview }
