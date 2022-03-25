import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addDrug } from '../controllers/drugControllers.js'
const router = express.Router()

router.route('/').post(addDrug)

export default router
