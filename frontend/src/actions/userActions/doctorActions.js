import axios from 'axios'
import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../../constants/userConstants'

import { PATIENT_LIST_RESET } from '../../constants/userConstants/patientConstants'
import {
  DOCTOR_DETAILS_FAIL,
  DOCTOR_DETAILS_REQUEST,
  DOCTOR_DETAILS_RESET,
  DOCTOR_DETAILS_SUCCESS,
  DOCTOR_REGISTER_FAIL,
  DOCTOR_REGISTER_REQUEST,
  DOCTOR_REGISTER_SUCCESS,
  DOCTOR_UPDATE_PROFILE_FAIL,
  DOCTOR_UPDATE_PROFILE_REQUEST,
  DOCTOR_UPDATE_PROFILE_SUCCESS,
} from '../../constants/userConstants/doctorConstants'
import {
  TEAM_DETAILS_RESET,
  TEAM_UPDATE_RESET,
} from '../../constants/teamConstants'
