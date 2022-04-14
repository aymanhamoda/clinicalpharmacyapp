import {
  LIST_USER_TEAMS_FAIL,
  LIST_USER_TEAMS_REQUEST,
  LIST_USER_TEAMS_RESET,
  LIST_USER_TEAMS_SUCCESS,
  TEAM_CREATE_FAIL,
  TEAM_CREATE_REQUEST,
  TEAM_CREATE_RESET,
  TEAM_CREATE_SUCCESS,
  TEAM_DETAILS_FAIL,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_RESET,
  TEAM_DETAILS_SUCCESS,
  TEAM_MEMBER_DETAILS_FAIL,
  TEAM_MEMBER_DETAILS_REQUEST,
  TEAM_MEMBER_DETAILS_RESET,
  TEAM_MEMBER_DETAILS_SUCCESS,
  TEAM_UPDATE_FAIL,
  TEAM_UPDATE_REQUEST,
  TEAM_UPDATE_RESET,
  TEAM_UPDATE_SUCCESS,
} from '../constants/teamConstants'

export const newTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_CREATE_REQUEST:
      return { loading: true }
    case TEAM_CREATE_SUCCESS:
      return { loading: false, newTeam: action.payload }
    case TEAM_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case TEAM_CREATE_RESET:
      return {}
    default:
      return state
  }
}

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

export const teamMemberDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_MEMBER_DETAILS_REQUEST:
      return { loading: true }
    case TEAM_MEMBER_DETAILS_SUCCESS:
      return { loading: false, members: action.payload }
    case TEAM_MEMBER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case TEAM_MEMBER_DETAILS_RESET:
      return {}
    default:
      return state
  }
}

export const userTeamsReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_USER_TEAMS_REQUEST:
      return { loading: true }
    case LIST_USER_TEAMS_SUCCESS:
      return { loading: false, userTeams: action.payload }
    case LIST_USER_TEAMS_FAIL:
      return { loading: false, error: action.payload }
    case LIST_USER_TEAMS_RESET:
      return {}
    default:
      return state
  }
}
