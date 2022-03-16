import express from 'express'
import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js'

const router = express.Router()

router.route('/').get(getUsers)
router.route('/').post(registerUser)
router.route('/:id').get(getUserProfile)
router.route('/:id/edit').put(updateUserProfile)
router.post('/login', authUser)

export default router
