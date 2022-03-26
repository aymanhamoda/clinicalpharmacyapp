import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addDrug, getTradeLabels } from '../controllers/drugControllers.js'
const router = express.Router()

router.route('/').post(addDrug)
router.route('/trades').get(getTradeLabels)

export default router
