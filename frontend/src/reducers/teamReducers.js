import {
  TEAM_DETAILS_FAIL,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_RESET,
  TEAM_DETAILS_SUCCESS,
  TEAM_UPDATE_FAIL,
  TEAM_UPDATE_REQUEST,
  TEAM_UPDATE_RESET,
  TEAM_UPDATE_SUCCESS,
} from '../constants/teamConstants'
export const teamDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_DETAILS_REQUEST:
      return { loading: true }
    case TEAM_DETAILS_SUCCESS:
      return { loading: false, team: action.payload }
    case TEAM_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case TEAM_DETAILS_RESET:
      return {}
    default:
      return state
  }
}

export const teamUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_UPDATE_REQUEST:
      return { loading: true }
    case TEAM_UPDATE_SUCCESS:
      return { loading: false, team: action.payload }
    case TEAM_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case TEAM_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
