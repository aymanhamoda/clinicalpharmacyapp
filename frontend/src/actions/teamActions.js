import axios from 'axios'
import {
  TEAM_DETAILS_FAIL,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_DETAILS_RESET,
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
