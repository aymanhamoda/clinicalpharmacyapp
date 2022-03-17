import axios from 'axios'
import {
  TEAM_DETAILS_FAIL,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_DETAILS_RESET,
  TEAM_UPDATE_FAIL,
  TEAM_UPDATE_SUCCESS,
  TEAM_UPDATE_REQUEST,
} from '../constants/teamConstants'

export const getTeamDetails = (teamId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/teams/${teamId}`, config)

    dispatch({
      type: TEAM_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    // if (message === 'Not authorized, token failed') {
    //   dispatch(logout())
    // }
    dispatch({
      type: TEAM_DETAILS_FAIL,
      payload: message,
    })
  }
}

export const updateTeamDetails = (team) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(
      `/api/teams/${team.teamId}/edit`,
      team,
      config
    )

    dispatch({
      type: TEAM_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    // if (message === 'Not authorized, token failed') {
    //   dispatch(logout())
    // }
    dispatch({
      type: TEAM_UPDATE_FAIL,
      payload: message,
    })
  }
}
