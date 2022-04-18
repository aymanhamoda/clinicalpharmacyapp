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
  newPatientReducer,
  patientDetailsReducer,
  patientUpdateReducer,
  inpatientListReducer,
} from './reducers/patientReducers'

import { drugsReducer } from './reducers/drugReducers'
import { subscribtionPayReducer } from './reducers/subscribtionReducers'
import {
  newTeamReducer,
  teamDetailsReducer,
  teamMemberDetailsReducer,
  teamUpdateReducer,
  userTeamsReducer,
} from './reducers/teamReducers'
import {
  admissionCreateReducer,
  admissionDetailsReducer,
  admissionUpdateReducer,
  admissionListReducer,
} from './reducers/admissionReducers'
import {
  reviewCreateReducer,
  reviewDeleteReducer,
  reviewDetailsReducer,
  reviewListReducer,
  reviewUpdateReducer,
} from './reducers/reviewReducers'
import { errTypeListReducer } from './reducers/errTypeReducers'

const reducer = combineReducers({
  drugRootStore: drugsReducer,
  errTypes: errTypeListReducer,

  userDetails: userDetailsReducer,
  registeredUser: userRegisterReducer,
  updatedUserDetails: updateUserDetailsReducer,

  patientListStore: patientListReducer,
  inpatientListStore: inpatientListReducer,
  patientDetails: patientDetailsReducer,
  newPatientStore: newPatientReducer,
  patientUpdateStore: patientUpdateReducer,

  admissionListStore: admissionListReducer,
  admissionDetails: admissionDetailsReducer,
  newAdmissionStore: admissionCreateReducer,
  updatedAdmissionStore: admissionUpdateReducer,

  userLogin: userLoginReducer,
  userDelete: userDeleteReducer,

  newTeamStore: newTeamReducer,
  teamDetails: teamDetailsReducer,
  teamUpdateStore: teamUpdateReducer,
  teamMemberStore: teamMemberDetailsReducer,
  userTeamStore: userTeamsReducer,

  newReviewStore: reviewCreateReducer,
  reviewListStore: reviewListReducer,
  reviewDetails: reviewDetailsReducer,
  updatedReviewStore: reviewUpdateReducer,
  deletedReviewStore: reviewDeleteReducer,

  paySubscribtion: subscribtionPayReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const drugRootsFromStorage = localStorage.getItem('drugRoots')
  ? JSON.parse(localStorage.getItem('drugRoots'))
  : null

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  drugRootStore: { drugRoots: drugRootsFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
