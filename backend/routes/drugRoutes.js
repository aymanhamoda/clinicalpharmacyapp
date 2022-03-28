import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
  addDrug,
  getDrugs,
  getTradeLabels,
} from '../controllers/drugControllers.js'
const router = express.Router()

router.route('/').post(addDrug)
router.route('/trades').get(getTradeLabels)
router.route('/').get(getDrugs)

export default router
