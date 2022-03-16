import {
  TEAM_DETAILS_FAIL,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_RESET,
  TEAM_DETAILS_SUCCESS,
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
