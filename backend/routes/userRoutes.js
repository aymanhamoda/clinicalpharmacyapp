import express from 'express'
import {
  authUser,
  getUserArrayDetails,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserDetails,
} from '../controllers/userController.js'

const router = express.Router()

router.route('/').get(getUsers)
router.route('/userarray').get(getUserArrayDetails)
router.route('/').post(registerUser)
router.route('/:id').get(getUserProfile)
router.route('/:id/edit').put(updateUserDetails)
router.post('/login', authUser)

export default router
