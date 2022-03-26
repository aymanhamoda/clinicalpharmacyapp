import {
  DRUG_LIST_FAIL,
  DRUG_LIST_REQUEST,
  DRUG_LIST_SUCCESS,
} from '../constants/drugConstants'

export const drugListReducer = (state = {}, action) => {
  switch (action.type) {
    case DRUG_LIST_REQUEST:
      return { loading: true }
    case DRUG_LIST_SUCCESS:
      return { loading: false, drugs: action.payload }
    case DRUG_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
