import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  addMember,
  getTeamMembers,
  getUserTeams,
} from '../controllers/teamMemberController.js'

const router = express.Router()

router.route('/').post(addMember)
router.route('/:id').get(getTeamMembers)
router.route('/:id/teams').get(getUserTeams) //id of user
// router.route('/:id/edit').put(updateTeamDetails)

export default router
