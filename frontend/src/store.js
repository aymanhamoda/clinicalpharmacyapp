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

import { drugListReducer, drugsReducer } from './reducers/drugReducers'
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
  reviewDeleteReducer,
  reviewListReducer,
  reviewUpdateReducer,
} from './reducers/reviewReducers'
import { errTypeListReducer } from './reducers/errTypeReducers'

const reducer = combineReducers({
  drugList: drugListReducer,
  drugRoots: drugsReducer,
  errTypes: errTypeListReducer,

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
  teamUpdateStore: teamUpdateReducer,
  teamMemberStore: teamMemberDetailsReducer,

  createdReviewStore: reviewCreateReducer,
  reviewListStore: reviewListReducer,
  updatedReviewStore: reviewUpdateReducer,
  deletedReviewStore: reviewDeleteReducer,

  createdAdmission: admissionCreateReducer,
  updatedAdmission: admissionUpdateReducer,

  userDelete: userDeleteReducer,

  paySubscribtion: subscribtionPayReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const drugLabelsFromStorage = localStorage.getItem('drugList')
  ? JSON.parse(localStorage.getItem('drugList'))
  : null
const drugRootsFromStorage = localStorage.getItem('drugRoots')
  ? JSON.parse(localStorage.getItem('drugRoots'))
  : null

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  drugList: { drugs: drugLabelsFromStorage },
  drugRoots: { drugRoot: drugRootsFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
