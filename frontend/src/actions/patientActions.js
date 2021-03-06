import axios from 'axios'
import {
  PATIENT_DETAILS_REQUEST,
  PATIENT_DETAILS_SUCCESS,
  PATIENT_DETAILS_FAIL,
  PATIENT_LIST_REQUEST,
  PATIENT_LIST_FAIL,
  PATIENT_LIST_SUCCESS,
  PATIENT_REGISTER_REQUEST,
  PATIENT_REGISTER_SUCCESS,
  PATIENT_REGISTER_FAIL,
  PATIENT_UPDATE_REQUEST,
  PATIENT_UPDATE_SUCCESS,
  PATIENT_UPDATE_FAIL,
  TEAM_INPATIENTS_REQUEST,
  TEAM_INPATIENTS_SUCCESS,
  TEAM_INPATIENTS_FAIL,
} from '../constants/patientConstants'

export const registerPatient = (patient) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PATIENT_REGISTER_REQUEST,
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
      `/api/patients`,
      {
        patient,
      },
      config
    )
    dispatch({
      type: PATIENT_REGISTER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PATIENT_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listPatient =
  (firstName, middleName, lastName, birthdate, team, pageNumber) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: PATIENT_LIST_REQUEST,
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
        `/api/patients/team/${team}?firstName=${firstName}&middleName=${middleName}&lastName=${lastName}&birthdate=${birthdate}&pageNumber=${pageNumber}`,
        config
      )
      dispatch({
        type: PATIENT_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PATIENT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const listInpatients = (teamId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_INPATIENTS_REQUEST,
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
      `/api/patients/${teamId}/inpatients`,
      config
    )

    dispatch({
      type: TEAM_INPATIENTS_SUCCESS,
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
      type: TEAM_INPATIENTS_FAIL,
      payload: message,
    })
  }
}

export const getPatientDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PATIENT_DETAILS_REQUEST,
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

    const { data } = await axios.get(`/api/patients/${id}`, config)

    dispatch({
      type: PATIENT_DETAILS_SUCCESS,
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
      type: PATIENT_DETAILS_FAIL,
      payload: message,
    })
  }
}
export const updatePatient =
  (patientId, firstName, middleName, lastName, birthdate) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: PATIENT_UPDATE_REQUEST,
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
        `/api/patients/${patientId}/edit`,
        {
          firstName,
          middleName,
          lastName,
          birthdate,
        },
        config
      )
      dispatch({
        type: PATIENT_UPDATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      //   if (message === 'Not authorized, token failed') {
      //     dispatch(logout())
      //   }
      dispatch({
        type: PATIENT_UPDATE_FAIL,
        payload: message,
      })
    }
  }
