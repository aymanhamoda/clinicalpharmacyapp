import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addErrType, getErrTypes } from '../controllers/errTypeController.js'
const router = express.Router()

router.route('/').post(addErrType)
router.route('/').get(getErrTypes)

export default router
