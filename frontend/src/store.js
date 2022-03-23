import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  userLoginReducer,
  userDeleteReducer,
  userDetailsReducer,
  userRegisterReducer,
  updateUserDetailsReducer,
} from './reducers/userReducers'
import {
  patientListReducer,
  patientRegisterReducer,
  patientDetailsReducer,
  patientUpdateReducer,
} from './reducers/patientReducers'

import { medicationListReducer } from './reducers/medicationReducers'
import { subscribtionPayReducer } from './reducers/subscribtionReducers'
import {
  teamDetailsReducer,
  teamMemberDetailsReducer,
  teamUpdateReducer,
} from './reducers/teamReducers'
import {
  admissionCreateReducer,
  admissionDetailsReducer,
  admissionUpdateReducer,
  patientadmissionListReducer,
} from './reducers/admissionReducers'
import {
  reviewCreateReducer,
  reviewListReducer,
  reviewUpdateReducer,
} from './reducers/reviewReducers'

const reducer = combineReducers({
  medicationList: medicationListReducer,

  userDetails: userDetailsReducer,
  registeredUser: userRegisterReducer,
  updatedUserDetails: updateUserDetailsReducer,

  patientList: patientListReducer,
  patientDetails: patientDetailsReducer,
  patientRegister: patientRegisterReducer,
  patientUpdate: patientUpdateReducer,

  admissionList: patientadmissionListReducer,
  admissionDetails: admissionDetailsReducer,

  userLogin: userLoginReducer,
  teamDetails: teamDetailsReducer,
  teamUpdates: teamUpdateReducer,
  teamMembers: teamMemberDetailsReducer,

  createdReviews: reviewCreateReducer,
  reviewList: reviewListReducer,
  updatedReview: reviewUpdateReducer,

  createdAdmission: admissionCreateReducer,
  updatedAdmission: admissionUpdateReducer,

  userDelete: userDeleteReducer,

  paySubscribtion: subscribtionPayReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
