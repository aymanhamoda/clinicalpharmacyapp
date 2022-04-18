import {
  PATIENT_DETAILS_FAIL,
  PATIENT_DETAILS_REQUEST,
  PATIENT_DETAILS_SUCCESS,
  PATIENT_LIST_FAIL,
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_SUCCESS,
  PATIENT_REGISTER_REQUEST,
  PATIENT_REGISTER_SUCCESS,
  PATIENT_REGISTER_FAIL,
  PATIENT_UPDATE_REQUEST,
  PATIENT_UPDATE_SUCCESS,
  PATIENT_UPDATE_FAIL,
  PATIENT_UPDATE_RESET,
  PATIENT_DETAILS_RESET,
  PATIENT_LIST_RESET,
  TEAM_INPATIENTS_REQUEST,
  TEAM_INPATIENTS_SUCCESS,
  TEAM_INPATIENTS_FAIL,
  TEAM_INPATIENTS_RESET,
} from '../constants/patientConstants'

export const newPatientReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_REGISTER_REQUEST:
      return { loading: true }
    case PATIENT_REGISTER_SUCCESS:
      return { loading: false, patientInfo: action.payload, success: true }
    case PATIENT_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const inpatientListReducer = (state = {}, action) => {
  switch (action.type) {
    case TEAM_INPATIENTS_REQUEST:
      return { loading: true }
    case TEAM_INPATIENTS_SUCCESS:
      return { loading: false, inpatients: action.payload }
    case TEAM_INPATIENTS_FAIL:
      return { loading: false, error: action.payload }
    case TEAM_INPATIENTS_RESET:
      return {}
    default:
      return state
  }
}

export const patientDetailsReducer = (state = { patient: {} }, action) => {
  switch (action.type) {
    case PATIENT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PATIENT_DETAILS_SUCCESS:
      return { loading: false, patient: action.payload }
    case PATIENT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case PATIENT_DETAILS_RESET:
      return {}
    default:
      return state
  }
}

export const patientListReducer = (state = { patients: [] }, action) => {
  switch (action.type) {
    case PATIENT_LIST_REQUEST:
      return { loading: true, patients: [] }
    case PATIENT_LIST_SUCCESS:
      return {
        loading: false,
        patients: action.payload.patients,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case PATIENT_LIST_FAIL:
      return { loading: false, error: action.payload }
    case PATIENT_LIST_RESET:
      return { patients: [] }
    default:
      return state
  }
}

export const patientUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_UPDATE_REQUEST:
      return { loading: true }
    case PATIENT_UPDATE_SUCCESS:
      return { loading: false, updatedPatient: action.payload }
    case PATIENT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PATIENT_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
