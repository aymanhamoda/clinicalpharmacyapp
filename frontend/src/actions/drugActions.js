import axios from 'axios'
import {
  DRUG_LIST_FAIL,
  DRUG_LIST_REQUEST,
  DRUG_LIST_SUCCESS,
} from '../constants/drugConstants'

export const listDrugs = () => async (dispatch) => {
  try {
    dispatch({
      type: DRUG_LIST_REQUEST,
    })

    const { data } = await axios.get(`/api/drugs/trades`)
    dispatch({
      type: DRUG_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: DRUG_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
