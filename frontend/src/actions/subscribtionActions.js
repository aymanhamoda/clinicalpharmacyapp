import axios from 'axios'
import {
  SUBSCRIBTION_PAY_FAIL,
  SUBSCRIBTION_PAY_REQUEST,
  SUBSCRIBTION_PAY_SUCCESS,
} from '../constants/subscribtionConstants'

export const paySubscribtion = (subscribtion) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIBTION_PAY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post(
      `/api/subscribtions/${userInfo._id}`,
      subscribtion,
      config
    )

    dispatch({
      type: SUBSCRIBTION_PAY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    // if (message === 'Not authorized, token failed') {
    //   dispatch(logout())
    // }
    dispatch({
      type: SUBSCRIBTION_PAY_FAIL,
      payload: message,
    })
  }
}
