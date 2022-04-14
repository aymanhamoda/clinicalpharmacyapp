import express from 'express'
import {
  createAdmission,
  getAdmissionDetails,
  getPatientAdmissions,
  updatePatientAdmission,
} from '../controllers/admissionController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, createAdmission)
router.route('/:id').get(protect, getPatientAdmissions) //id of patient
router.route('/:id/details').get(protect, getAdmissionDetails) //id of admission
router.route('/:id/edit').put(protect, updatePatientAdmission) //id of admission

export default router
