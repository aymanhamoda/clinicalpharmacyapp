import express from 'express'
import {
  createFollowup,
  getPatientFollowups,
  updatePatientFollowup,
} from '../controllers/followupController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(createFollowup)
router.route('/:id').get(getPatientFollowups)
router.route('/:id/edit').put(updatePatientFollowup)

export default router
