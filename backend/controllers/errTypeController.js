import asyncHandler from 'express-async-handler'
import ErrType from '../models/errTypeModel.js'

const addErrType = asyncHandler(async (req, res) => {
  const errType = await ErrType.create({
    label: req.body.label,
  })

  if (errType) {
    res.status(201).json(errType)
  } else {
    res.status(400)
    throw new Error('name is required')
  }
})

const getErrTypes = asyncHandler(async (req, res) => {
  const errTypes = await ErrType.find({})

  if (errTypes) {
    res.status(201).json(errTypes)
  } else {
    res.status(400)
    throw new Error('No error found')
  }
})

export { addErrType, getErrTypes }
