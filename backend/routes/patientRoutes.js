import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  getPatientDetails,
  getPatients,
  registerPatient,
  updatePatient,
} from '../controllers/patientController.js'
const router = express.Router()

router.route('/').post(registerPatient)
router.route('/').get(getPatients)
router.route('/:id').get(getPatientDetails) //id of patient
router.route('/:id/edit').put(updatePatient) //id of patient

export default router
