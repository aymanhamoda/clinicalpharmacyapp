import {
  REVIEW_CREATE_REQUEST,
  REVIEW_CREATE_SUCCESS,
  REVIEW_CREATE_FAIL,
  REVIEW_LIST_SUCCESS,
  REVIEW_LIST_FAIL,
  REVIEW_LIST_REQUEST,
  REVIEW_UPDATE_REQUEST,
  REVIEW_UPDATE_SUCCESS,
  REVIEW_UPDATE_FAIL,
  REVIEW_LIST_RESET,
  REVIEW_UPDATE_RESET,
  REVIEW_CREATE_RESET,
  REVIEW_DELETE_REQUEST,
  REVIEW_DELETE_SUCCESS,
  REVIEW_DELETE_FAIL,
  REVIEW_DELETE_RESET,
  REVIEW_DETAILS_REQUEST,
  REVIEW_DETAILS_SUCCESS,
  REVIEW_DETAILS_FAIL,
  REVIEW_DETAILS_RESET,
} from '../constants/reviewConstants'

export const reviewCreateReducer = (state = { review: '' }, action) => {
  switch (action.type) {
    case REVIEW_CREATE_REQUEST:
      return { loading: true }
    case REVIEW_CREATE_SUCCESS:
      return { loading: false, newReview: action.payload }
    case REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case REVIEW_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const reviewDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_DETAILS_REQUEST:
      return { loading: true }
    case REVIEW_DETAILS_SUCCESS:
      return { loading: false, review: action.payload }
    case REVIEW_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case REVIEW_DETAILS_RESET:
      return {}
    default:
      return state
  }
}

export const reviewListReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_LIST_REQUEST:
      return { loading: true }
    case REVIEW_LIST_SUCCESS:
      return { loading: false, reviews: action.payload }
    case REVIEW_LIST_FAIL:
      return { loading: false, error: action.payload }
    case REVIEW_LIST_RESET:
      return {}
    default:
      return state
  }
}

export const reviewUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_UPDATE_REQUEST:
      return { loading: true }
    case REVIEW_UPDATE_SUCCESS:
      return { loading: false, updatedReview: action.payload }
    case REVIEW_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case REVIEW_UPDATE_RESET:
      return {}
    default:
      return state
  }
}

export const reviewDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_DELETE_REQUEST:
      return { loading: true }
    case REVIEW_DELETE_SUCCESS:
      return { loading: false, deletedReview: action.payload }
    case REVIEW_DELETE_FAIL:
      return { loading: false, error: action.payload }
    case REVIEW_DELETE_RESET:
      return {}
    default:
      return state
  }
}
