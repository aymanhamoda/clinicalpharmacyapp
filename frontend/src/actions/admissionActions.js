import axios from 'axios'
import {
  ADMISSION_CREATE_REQUEST,
  ADMISSION_CREATE_SUCCESS,
  ADMISSION_CREATE_FAIL,
  PATIENT_ADMISSION_LIST_SUCCESS,
  PATIENT_ADMISSION_LIST_FAIL,
  PATIENT_ADMISSION_LIST_REQUEST,
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
      `/api/visits/${admission.id}`,
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

export const listPatientAdmissions =
  (patientId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PATIENT_ADMISSION_LIST_REQUEST,
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
        type: PATIENT_ADMISSION_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PATIENT_ADMISSION_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
