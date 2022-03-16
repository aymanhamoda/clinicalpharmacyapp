import axios from 'axios'
import {
  VISIT_CREATE_REQUEST,
  VISIT_CREATE_SUCCESS,
  VISIT_CREATE_FAIL,
  PATIENT_VISIT_LIST_SUCCESS,
  PATIENT_VISIT_LIST_FAIL,
  PATIENT_VISIT_LIST_REQUEST,
  VISIT_UPDATE_REQUEST,
  VISIT_UPDATE_SUCCESS,
  VISIT_UPDATE_FAIL,
} from '../constants/visitConstants'

export const createVisit = (visit) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VISIT_CREATE_REQUEST,
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
    const { data } = await axios.post(`/api/visits`, visit, config)

    dispatch({
      type: VISIT_CREATE_SUCCESS,
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
      type: VISIT_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateVisit = (visit) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VISIT_UPDATE_REQUEST,
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
    const { data } = await axios.put(`/api/visits/${visit.id}`, visit, config)

    dispatch({
      type: VISIT_UPDATE_SUCCESS,
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
      type: VISIT_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const listPatientVisits = (patientId, clinicAdmin) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PATIENT_VISIT_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(
      `/api/visits/${clinicAdmin}?patientId=${patientId}`,
      config
    )
    dispatch({
      type: PATIENT_VISIT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PATIENT_VISIT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
