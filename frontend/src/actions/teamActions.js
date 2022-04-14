import axios from 'axios'
import {
  TEAM_DETAILS_FAIL,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_UPDATE_FAIL,
  TEAM_UPDATE_SUCCESS,
  TEAM_UPDATE_REQUEST,
  TEAM_MEMBER_DETAILS_REQUEST,
  TEAM_MEMBER_DETAILS_SUCCESS,
  TEAM_MEMBER_DETAILS_FAIL,
  TEAM_CREATE_REQUEST,
  TEAM_CREATE_SUCCESS,
  TEAM_CREATE_FAIL,
  LIST_USER_TEAMS_REQUEST,
  LIST_USER_TEAMS_SUCCESS,
  LIST_USER_TEAMS_RESET,
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

export const getTeamMemberDetails = (teamId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_MEMBER_DETAILS_REQUEST,
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
    const { data } = await axios.get(`/api/teams/${teamId}/members`, config)

    dispatch({
      type: TEAM_MEMBER_DETAILS_SUCCESS,
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
      type: TEAM_MEMBER_DETAILS_FAIL,
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

export const createTeam = (newTeam) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_CREATE_REQUEST,
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
    const { data } = await axios.post(`/api/teams`, newTeam, config)

    dispatch({
      type: TEAM_CREATE_SUCCESS,
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
      type: TEAM_CREATE_FAIL,
      payload: message,
    })
  }
}

export const listUserTeams = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIST_USER_TEAMS_REQUEST,
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
    const { data } = await axios.get(
      `/api/teams/?user=${userInfo.email}`,
      config
    )

    dispatch({
      type: LIST_USER_TEAMS_SUCCESS,
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
      type: LIST_USER_TEAMS_RESET,
      payload: message,
    })
  }
}
