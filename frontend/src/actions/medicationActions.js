import axios from 'axios'
import {
  MEDICATION_LIST_FAIL,
  MEDICATION_LIST_REQUEST,
  MEDICATION_LIST_SUCCESS,
} from '../constants/medicationConstants'

export const listMedications = () => async (dispatch) => {
  try {
    dispatch({
      type: MEDICATION_LIST_REQUEST,
    })

    const { data } = await axios.get(`/api/medications`)
    dispatch({
      type: MEDICATION_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: MEDICATION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
