import {
  DRUG_LIST_FAIL,
  DRUG_LIST_REQUEST,
  DRUG_LIST_SUCCESS,
  DRUG_ROOT_FAIL,
  DRUG_ROOT_REQUEST,
  DRUG_LIST_RESET,
  DRUG_ROOT_SUCCESS,
  DRUG_ROOT_RESET,
} from '../constants/drugConstants'

export const drugListReducer = (state = {}, action) => {
  switch (action.type) {
    case DRUG_LIST_REQUEST:
      return { loading: true }
    case DRUG_LIST_SUCCESS:
      return { loading: false, drugs: action.payload }
    case DRUG_LIST_FAIL:
      return { loading: false, error: action.payload }
    case DRUG_LIST_RESET:
      return {}
    default:
      return state
  }
}

export const drugsReducer = (state = {}, action) => {
  switch (action.type) {
    case DRUG_ROOT_REQUEST:
      return { loading: true }
    case DRUG_ROOT_SUCCESS:
      return { loading: false, drugRoot: action.payload }
    case DRUG_ROOT_FAIL:
      return { loading: false, error: action.payload }
    case DRUG_ROOT_RESET:
      return {}
    default:
      return state
  }
}
