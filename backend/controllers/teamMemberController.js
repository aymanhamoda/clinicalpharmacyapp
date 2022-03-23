import asyncHandler from 'express-async-handler'
import TeamMember from '../models/teamMemberModel.js'
import User from '../models/userModel.js'
import Team from '../models/teamModel.js'

const addMember = asyncHandler(async (req, res) => {
  const { team, user } = req.body
  const teamMember = await TeamMember.create({
    team,
    user,
  })

  if (teamMember) {
    res.status(201).json({
      _id: team._id,
      team: team.team,
      user: team.user,
    })
  } else {
    res.status(400)
    throw new Error('email is required')
  }
})

const getUserTeams = asyncHandler(async (req, res) => {
  const userTeamIds = await TeamMember.find({ user: req.params.id })
  // const teams = await Team.find({})
  // const teamIds = teams.map((t) => {
  //   return t._id.toString()
  // })
  // const userTeams = teams.find({ _id: { $in: userTeamIds } })

  if (userTeamIds) {
    res.json(userTeamIds)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getTeamMembers = asyncHandler(async (req, res) => {
  const teamMembers = await TeamMember.findById(req.params.id)
  const users = await User.find({})

  const teamMemberDetails = users.find({ _id: { $in: teamMembers } })
  if (teamMemberDetails) {
    res.json(teamMemberDetails)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { addMember, getTeamMembers, getUserTeams }
