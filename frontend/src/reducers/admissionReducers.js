import {
  ADMISSION_CREATE_REQUEST,
  ADMISSION_CREATE_SUCCESS,
  ADMISSION_CREATE_FAIL,
  ADMISSION_LIST_SUCCESS,
  ADMISSION_LIST_FAIL,
  ADMISSION_LIST_REQUEST,
  ADMISSION_LIST_RESET,
  ADMISSION_UPDATE_REQUEST,
  ADMISSION_UPDATE_SUCCESS,
  ADMISSION_UPDATE_FAIL,
  ADMISSION_DETAILS_REQUEST,
  ADMISSION_DETAILS_SUCCESS,
  ADMISSION_DETAILS_FAIL,
  ADMISSION_DETAILS_RESET,
  ADMISSION_CREATE_RESET,
  ADMISSION_UPDATE_RESET,
} from '../constants/admissionConstants'

export const admissionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMISSION_CREATE_REQUEST:
      return { loading: true }
    case ADMISSION_CREATE_SUCCESS:
      return { loading: false, newAdmission: action.payload }
    case ADMISSION_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case ADMISSION_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const admissionDetailsReducer = (state = { admission: '' }, action) => {
  switch (action.type) {
    case ADMISSION_DETAILS_REQUEST:
      return { loading: true }
    case ADMISSION_DETAILS_SUCCESS:
      return { loading: false, admission: action.payload }
    case ADMISSION_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case ADMISSION_DETAILS_RESET:
      return {}
    default:
      return state
  }
}

export const admissionListReducer = (state = { admissions: [] }, action) => {
  switch (action.type) {
    case ADMISSION_LIST_REQUEST:
      return { loading: true }
    case ADMISSION_LIST_SUCCESS:
      return { loading: false, admissions: action.payload }
    case ADMISSION_LIST_FAIL:
      return { loading: false, error: action.payload }
    case ADMISSION_LIST_RESET:
      return {}
    default:
      return state
  }
}

export const admissionUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMISSION_UPDATE_REQUEST:
      return { loading: true }
    case ADMISSION_UPDATE_SUCCESS:
      return { loading: false, updatedAdmission: action.payload }
    case ADMISSION_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case ADMISSION_UPDATE_RESET:
      return {}
    default:
      return state
  }
}
