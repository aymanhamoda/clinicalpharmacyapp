import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getTeamDetails } from '../actions/teamActions'
import Loader from '../components/Loader'

const TeamEditScreen = ({ match }) => {
  const teamId = match.params.id
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const teamDetails = useSelector((state) => state.teamDetails)
  const { team } = teamDetails

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    } else {
      if (team) {
        if (team.admin !== userInfo._id) {
          history.push('/')
        }
      }
    }
    if (!team) {
      dispatch(getTeamDetails(teamId))
    }
  }, [userInfo, teamId, team])

  const history = useHistory()
  return (
    <div>
      {!team || !userInfo ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-white lead">{team.name}</h1>
          <h1>{userInfo._id}</h1>
          <h1>{team.admin}</h1>
        </>
      )}
    </div>
  )
}

export default TeamEditScreen
