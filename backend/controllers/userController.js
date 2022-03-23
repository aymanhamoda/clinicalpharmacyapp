import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      teams: user.teams,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      teams: user.teams,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

const getUserArrayDetails = asyncHandler(async (req, res) => {
  const userArray = req.body
  const userArrayLength = userArray.length
  const users = await User.find({})

  // for (let index = 1; index < userArrayLength + 1; index++) {
  let matchedUser = userArray.map((u) => {
    return u.user
  })

  if (users) {
    matchedUser = users.filter((u) => {
      return u._id.toString() !== matchedUser
    })
  }

  // }
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUserDetails = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const user = await User.findById(req.params.id)

  if (user) {
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    if (password) {
      user.password = password
    }
    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  authUser,
  registerUser,
  getUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUserDetails,
  getUserArrayDetails,
}
