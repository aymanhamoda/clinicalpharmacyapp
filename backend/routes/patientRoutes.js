import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  getPatientDetails,
  getPatients,
  registerPatient,
  getTeamInpatients,
  updatePatient,
} from '../controllers/patientController.js'
const router = express.Router()

router.route('/').post(registerPatient)
router.route('/team/:id').get(getPatients) //id of team
router.route('/:id').get(getPatientDetails) //id of patient
router.route('/:id/edit').put(updatePatient) //id of patient
router.route('/:id/inpatients').get(getTeamInpatients) //id of
export default router
