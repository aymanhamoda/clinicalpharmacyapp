import axios from 'axios'
import {
  DRUG_LIST_FAIL,
  DRUG_LIST_REQUEST,
  DRUG_LIST_SUCCESS,
  DRUG_ROOT_FAIL,
  DRUG_ROOT_REQUEST,
  DRUG_ROOT_SUCCESS,
} from '../constants/drugConstants'

export const listDrugLabels = () => async (dispatch) => {
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
    console.log(error)
    // dispatch({
    //   type: DRUG_LIST_FAIL,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // })
  }
}

export const listDrugRoots = () => async (dispatch) => {
  try {
    dispatch({
      type: DRUG_ROOT_REQUEST,
    })

    const { data } = await axios.get(`/api/drugs/`)
    dispatch({
      type: DRUG_ROOT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error)
    // dispatch({
    //   type: DRUG_ROOT_FAIL,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // })
  }
}
