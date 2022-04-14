import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  createTeam,
  getUserTeams,
  getTeamDetails,
  updateTeamDetails,
  getMemberDetails,
} from '../controllers/teamController.js'
const router = express.Router()

router.route('/').post(protect, createTeam)
router.route('/:id').get(getTeamDetails)
router.route('/:id/members').get(getMemberDetails)
router.route('/').get(getUserTeams)
router.route('/:id/edit').put(updateTeamDetails)

export default router
