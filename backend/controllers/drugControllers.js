import asyncHandler from 'express-async-handler'
import Drug from '../models/drugModel.js'

const addDrug = asyncHandler(async (req, res) => {
  const { label, tradeLabels, errTemps } = req.body
  const drug = await Drug.create({
    label,
    tradeLabels,
    errTemps,
  })

  if (drug) {
    res.status(201).json(drug)
  } else {
    res.status(400)
    throw new Error('name is required')
  }
})

// const getErrTypes = asyncHandler(async (req, res) => {
//   const errTypes = await ErrType.find({})

//   if (errTypes) {
//     res.status(201).json(errTypes)
//   } else {
//     res.status(400)
//     throw new Error('No error found')
//   }
// })

export { addDrug }
