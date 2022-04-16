import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addDrug, getDrugs } from '../controllers/drugControllers.js'
const router = express.Router()

router.route('/').post(addDrug)
router.route('/').get(getDrugs)

export default router
