import {
  SECRETARY_LIST_REQUEST,
  SECRETARY_LIST_SUCCESS,
  SECRETARY_LIST_FAIL,
  SECRETARY_REGISTER_REQUEST,
  SECRETARY_REGISTER_SUCCESS,
  SECRETARY_REGISTER_FAIL,
} from '../../constants/userConstants/secretaryConstants'
export const secretaryRegisterReducer = (state = { secretary: {} }, action) => {
  switch (action.type) {
    case SECRETARY_REGISTER_REQUEST:
      return { loading: true }
    case SECRETARY_REGISTER_SUCCESS:
      return { loading: false, secretary: action.payload }
    case SECRETARY_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const secretaryListReducer = (state = { secretaries: [] }, action) => {
  switch (action.type) {
    case SECRETARY_LIST_REQUEST:
      return { loading: true }
    case SECRETARY_LIST_SUCCESS:
      return { loading: false, secretaries: action.payload }
    case SECRETARY_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
