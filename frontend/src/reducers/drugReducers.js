import {
  DRUG_ROOT_FAIL,
  DRUG_ROOT_REQUEST,
  DRUG_ROOT_SUCCESS,
  DRUG_ROOT_RESET,
} from '../constants/drugConstants'

export const drugsReducer = (state = {}, action) => {
  switch (action.type) {
    case DRUG_ROOT_REQUEST:
      return { loading: true }
    case DRUG_ROOT_SUCCESS:
      return { loading: false, drugRoots: action.payload }
    case DRUG_ROOT_FAIL:
      return { loading: false, error: action.payload }
    case DRUG_ROOT_RESET:
      return {}
    default:
      return state
  }
}
