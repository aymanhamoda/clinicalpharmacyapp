import {
  MEDICATION_LIST_FAIL,
  MEDICATION_LIST_REQUEST,
  MEDICATION_LIST_SUCCESS,
} from '../constants/medicationConstants'

export const medicationListReducer = (state = { medications: [] }, action) => {
  switch (action.type) {
    case MEDICATION_LIST_REQUEST:
      return { loading: true }
    case MEDICATION_LIST_SUCCESS:
      return { loading: false, success: true, medications: action.payload }
    case MEDICATION_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
