import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  patientVisitListReducer,
  visitCreateReducer,
  visitUpdateReducer,
} from './reducers/visitReducers'
import {
  secretaryRegisterReducer,
  secretaryListReducer,
} from './reducers/userReducers/secretaryReducers'
import { userLoginReducer, userDeleteReducer } from './reducers/userReducers'
import {
  patientListReducer,
  patientRegisterReducer,
  patientDetailsReducer,
  patientUpdateReducer,
} from './reducers/userReducers/patientReducers'

import {
  doctorDetailsReducer,
  doctorRegisterReducer,
  doctorUpdateProfileReducer,
} from './reducers/userReducers/doctorReducers'

import { medicationListReducer } from './reducers/medicationReducers'
import { subscribtionPayReducer } from './reducers/subscribtionReducers'
import { teamDetailsReducer, teamUpdateReducer } from './reducers/teamReducers'

const reducer = combineReducers({
  medicationList: medicationListReducer,

  doctorDetails: doctorDetailsReducer,
  doctorRegister: doctorRegisterReducer,
  doctorUpdateProfile: doctorUpdateProfileReducer,

  patientList: patientListReducer,
  patientDetails: patientDetailsReducer,
  patientRegister: patientRegisterReducer,
  patientUpdate: patientUpdateReducer,
  patientVisitList: patientVisitListReducer,

  userLogin: userLoginReducer,
  teamDetails: teamDetailsReducer,
  teamUpdates: teamUpdateReducer,

  visitCreate: visitCreateReducer,
  visitUpdate: visitUpdateReducer,

  secretaryRegister: secretaryRegisterReducer,
  secretaryList: secretaryListReducer,
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
