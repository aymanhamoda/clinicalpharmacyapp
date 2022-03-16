import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  createTeam,
  getUserTeams,
  getTeamDetails,
  updateTeam,
} from '../controllers/teamController.js'
const router = express.Router()

router.route('/').post(createTeam)
router.route('/:id').get(getTeamDetails)
router.route('/userteams/:id').get(getUserTeams)
router.route('/:id/edit').put(updateTeam)

export default router
