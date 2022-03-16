import axios from 'axios'

import {
  SECRETARY_LIST_SUCCESS,
  SECRETARY_LIST_REQUEST,
  SECRETARY_LIST_FAIL,
  SECRETARY_REGISTER_REQUEST,
  SECRETARY_REGISTER_SUCCESS,
  SECRETARY_REGISTER_FAIL,
} from '../../constants/userConstants/secretaryConstants'

export const registerSecretary = (
  firstName,
  middleName,
  lastName,
  birthdate,
  phone,
  email,
  password
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SECRETARY_REGISTER_REQUEST,
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
      `/api/users/secretary/${userInfo._id}`,
      {
        firstName,
        middleName,
        lastName,
        phone,
        email,
        birthdate,
        password,
      },
      config
    )
    dispatch({
      type: SECRETARY_REGISTER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SECRETARY_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listSecretary = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SECRETARY_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/users/secretary/${id}`, config)

    dispatch({
      type: SECRETARY_LIST_SUCCESS,
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
      type: SECRETARY_LIST_FAIL,
      payload: message,
    })
  }
}
