import axios from 'axios'
import {
  ADMISSION_CREATE_REQUEST,
  ADMISSION_CREATE_SUCCESS,
  ADMISSION_CREATE_FAIL,
  ADMISSION_DETAILS_REQUEST,
  ADMISSION_DETAILS_SUCCESS,
  ADMISSION_DETAILS_FAIL,
  ADMISSION_LIST_SUCCESS,
  ADMISSION_LIST_FAIL,
  ADMISSION_LIST_REQUEST,
  ADMISSION_UPDATE_REQUEST,
  ADMISSION_UPDATE_SUCCESS,
  ADMISSION_UPDATE_FAIL,
} from '../constants/admissionConstants'

export const createAdmission = (admission) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMISSION_CREATE_REQUEST,
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
    const { data } = await axios.post(`/api/admissions`, admission, config)

    dispatch({
      type: ADMISSION_CREATE_SUCCESS,
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
      type: ADMISSION_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateAdmission = (admission) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMISSION_UPDATE_REQUEST,
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
    const { data } = await axios.put(
      `/api/admissions/${admission._id}/edit`,
      admission,
      config
    )

    dispatch({
      type: ADMISSION_UPDATE_SUCCESS,
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
      type: ADMISSION_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const listAdmissions = (patientId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMISSION_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/admissions/${patientId}`, config)
    dispatch({
      type: ADMISSION_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ADMISSION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getAdmissionDetails =
  (admissionId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ADMISSION_DETAILS_REQUEST,
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

      const { data } = await axios.get(
        `/api/admissions/${admissionId}/details`,
        config
      )

      dispatch({
        type: ADMISSION_DETAILS_SUCCESS,
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
        type: ADMISSION_DETAILS_FAIL,
        payload: message,
      })
    }
  }
