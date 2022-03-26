import axios from 'axios'
import {
  ERR_TYPE_LIST_FAIL,
  ERR_TYPE_LIST_REQUEST,
  ERR_TYPE_LIST_SUCCESS,
} from '../constants/errTypeConstants'

export const listDrugErrTypes = () => async (dispatch) => {
  try {
    dispatch({
      type: ERR_TYPE_LIST_REQUEST,
    })

    const { data } = await axios.get(`/api/errtypes`)
    dispatch({
      type: ERR_TYPE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ERR_TYPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
