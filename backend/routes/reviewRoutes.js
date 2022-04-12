import express from 'express'
import {
  createPatientReview,
  deleteReview,
  getPatientReviews,
  getReviewDetails,
  updatePatientReview,
} from '../controllers/reviewController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(createPatientReview)
router.route('/:id').get(getPatientReviews) //ID of Admission
router.route('/:id/review').get(getReviewDetails) //ID of review
router.route('/:id/edit').put(updatePatientReview)
router.route('/:id').delete(deleteReview)

export default router
