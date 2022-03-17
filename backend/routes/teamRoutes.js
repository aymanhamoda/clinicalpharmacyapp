import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  createTeam,
  getUserTeams,
  getTeamDetails,
  updateTeamDetails,
} from '../controllers/teamController.js'
const router = express.Router()

router.route('/').post(createTeam)
router.route('/:id').get(getTeamDetails)
router.route('/').get(getUserTeams)
router.route('/:id/edit').put(updateTeamDetails)

export default router
