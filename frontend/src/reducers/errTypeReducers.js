import {
  ERR_TYPE_LIST_FAIL,
  ERR_TYPE_LIST_REQUEST,
  ERR_TYPE_LIST_SUCCESS,
} from '../constants/errTypeConstants'

export const errTypeListReducer = (state = {}, action) => {
  switch (action.type) {
    case ERR_TYPE_LIST_REQUEST:
      return { loading: true }
    case ERR_TYPE_LIST_SUCCESS:
      return { loading: false, errTypeList: action.payload }
    case ERR_TYPE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
