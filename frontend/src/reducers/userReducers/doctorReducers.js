import {
  DOCTOR_DETAILS_FAIL,
  DOCTOR_DETAILS_REQUEST,
  DOCTOR_DETAILS_RESET,
  DOCTOR_DETAILS_SUCCESS,
  DOCTOR_REGISTER_FAIL,
  DOCTOR_REGISTER_REQUEST,
  DOCTOR_REGISTER_SUCCESS,
  DOCTOR_UPDATE_PROFILE_FAIL,
  DOCTOR_UPDATE_PROFILE_REQUEST,
  DOCTOR_UPDATE_PROFILE_SUCCESS,
} from '../../constants/userConstants/doctorConstants'

export const doctorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCTOR_REGISTER_REQUEST:
      return { loading: true }
    case DOCTOR_REGISTER_SUCCESS:
      return { loading: false, doctorInfo: action.payload }
    case DOCTOR_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const doctorDetailsReducer = (state = { doctor: {} }, action) => {
  switch (action.type) {
    case DOCTOR_DETAILS_REQUEST:
      return { ...state, loading: true }
    case DOCTOR_DETAILS_SUCCESS:
      return { loading: false, doctor: action.payload }
    case DOCTOR_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case DOCTOR_DETAILS_RESET:
      return { doctor: {} }
    default:
      return state
  }
}

export const doctorUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case DOCTOR_UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case DOCTOR_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, doctorInfo: action.payload }
    case DOCTOR_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
