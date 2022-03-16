import {
  VISIT_CREATE_REQUEST,
  VISIT_CREATE_SUCCESS,
  VISIT_CREATE_FAIL,
  PATIENT_VISIT_LIST_SUCCESS,
  PATIENT_VISIT_LIST_FAIL,
  PATIENT_VISIT_LIST_REQUEST,
  VISIT_UPDATE_REQUEST,
  VISIT_UPDATE_SUCCESS,
  VISIT_UPDATE_FAIL,
} from '../constants/visitConstants'

export const visitCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case VISIT_CREATE_REQUEST:
      return { loading: true }
    case VISIT_CREATE_SUCCESS:
      return { loading: false, success: true, visitInfo: action.payload }
    case VISIT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const patientVisitListReducer = (state = { visits: [] }, action) => {
  switch (action.type) {
    case PATIENT_VISIT_LIST_REQUEST:
      return { loading: true }
    case PATIENT_VISIT_LIST_SUCCESS:
      return { loading: false, success: true, visits: action.payload }
    case PATIENT_VISIT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const visitUpdateReducer = (state = { visit: {} }, action) => {
  switch (action.type) {
    case VISIT_UPDATE_REQUEST:
      return { loading: true }
    case VISIT_UPDATE_SUCCESS:
      return { loading: false, success: true }
    case VISIT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
