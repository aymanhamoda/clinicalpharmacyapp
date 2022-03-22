import express from 'express'
import {
  createPatientReview,
  getPatientReviews,
  updatePatientReview,
} from '../controllers/reviewController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(createPatientReview)
router.route('/:id').get(getPatientReviews) //ID of patient
router.route('/:id/edit').put(updatePatientReview)

export default router
