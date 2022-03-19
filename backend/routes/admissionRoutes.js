import express from 'express'
import {
  createAdmission,
  getPatientAdmissions,
  updatePatientAdmission,
} from '../controllers/admissionController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(createAdmission)
router.route('/:id').get(getPatientAdmissions) //id of patient
router.route('/:id/edit').put(updatePatientAdmission) //id of admission

export default router
