import {
  SUBSCRIBTION_PAY_FAIL,
  SUBSCRIBTION_PAY_REQUEST,
  SUBSCRIBTION_PAY_SUCCESS,
} from '../constants/subscribtionConstants'
export const subscribtionPayReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIBTION_PAY_REQUEST:
      return { loading: true }
    case SUBSCRIBTION_PAY_SUCCESS:
      return { loading: false, success: true, subscribtion: action.payload }
    case SUBSCRIBTION_PAY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
