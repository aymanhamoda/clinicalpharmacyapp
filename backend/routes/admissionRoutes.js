import express from 'express'
import {
  createAdmission,
  getPatientAdmissions,
  updatePatientAdmission,
} from '../controllers/admissionController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(createAdmission)
router.route('/:id').get(getPatientAdmissions)
router.route('/:id/edit').put(updatePatientAdmission)

export default router
