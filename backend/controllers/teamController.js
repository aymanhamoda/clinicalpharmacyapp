import asyncHandler from 'express-async-handler'
import Team from '../models/teamModel.js'

const createTeam = asyncHandler(async (req, res) => {
  const { name, admin, specialty, members } = req.body
  const team = await Team.create({
    name,
    admin,
    specialty,
    members,
  })

  if (team) {
    res.status(201).json({
      _id: team._id,
      name: team.name,
      specialty: team.specialty,
    })
  } else {
    res.status(400)
    throw new Error('email is required')
  }
})

const getUserTeams = asyncHandler(async (req, res) => {
  const userEmail = req.query.user

  const team = await Team.find({})

  const userTeams = team.filter((t) =>
    t.members.find((m) => {
      return m.user === userEmail
    })
  )

  if (userTeams) {
    res.json(userTeams)
  } else {
    res.status(404)
    throw new Error('User has no team yet')
  }
})

const getTeamDetails = asyncHandler(async (req, res) => {
  const team = await Team.findById(req.params.id)

  if (team) {
    res.json(team)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const updateTeamDetails = asyncHandler(async (req, res) => {
  const { name, specialty, members } = req.body

  const team = await Team.findById(req.params.id)

  if (team) {
    team.name = name || team.name
    team.specialty = specialty || team.specialty
    team.members = members || team.members

    const updatedteam = await team.save()
    res.json(updatedteam)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export { createTeam, getTeamDetails, updateTeamDetails, getUserTeams }
