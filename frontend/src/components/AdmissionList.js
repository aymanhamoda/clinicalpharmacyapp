import React, { useState, useEffect } from 'react'
import { Card, Accordion, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { listAdmissions } from '../actions/admissionActions'
import AdmissionForm from './AdmissionForm'
import { Link } from 'react-router-dom'
import { getTeamDetails } from '../actions/teamActions'
import {
  ADMISSION_CREATE_RESET,
  ADMISSION_LIST_RESET,
} from '../constants/admissionConstants'

const AdmissionList = ({ patientId }) => {
  const dispatch = useDispatch()

  const [editPermission, setEditPermission] = useState()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const patientDetails = useSelector((state) => state.patientDetails)
  const { patient } = patientDetails

  const admissionList = useSelector((state) => state.admissionList)
  const { loading, admissions } = admissionList

  const newAdmissionStore = useSelector((state) => state.newAdmissionStore)
  const { loading: loadingNewAdmission, newAdmission } = newAdmissionStore

  const teamDetails = useSelector((state) => state.teamDetails)
  const { team } = teamDetails

  useEffect(() => {
    if (newAdmission) {
      dispatch({ type: ADMISSION_CREATE_RESET })
      dispatch({ type: ADMISSION_LIST_RESET })
    }

    if (patient) {
      if (!admissions || patient._id !== patientId) {
        dispatch(listAdmissions(patientId))
      }

      if (!team || team._id !== patient.team) {
        dispatch(getTeamDetails(patient.team))
      } else {
        setEditPermission(
          team.members.find((m) => m.user === userInfo.email).canEdit
        )
      }
    }
  }, [dispatch, patient, patientId, userInfo, team, newAdmission, admissions])

  return (
    <div className="mt-5">
      {loadingNewAdmission || loading || !admissions ? (
        <Loader />
      ) : (
        <>
          <div className="row justify-content-center">
            <h1>ADMISSION LIST</h1>
          </div>
          {admissions.map((adm) => (
            <div Key={adm._id}>
              <Accordion className="py-2">
                <Accordion.Toggle
                  eventKey={adm._id}
                  as={Card.Header}
                  variant="link">
                  <h6>
                    <i className="fas fa-angle-double-down"></i> Admission Date:{' '}
                    {adm.admissionDate.substring(0, 10)}
                  </h6>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={adm._id}>
                  <div className="container">
                    <Row>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${adm.admissionDetails}`,
                        }}
                      />
                    </Row>
                    <Link
                      className="row text-warning btn btn-outline-success"
                      to={`/admissions/${adm._id}`}>
                      See Reviews
                    </Link>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </div>
          ))}
        </>
      )}

      {editPermission && <AdmissionForm patientId={patientId} />}
    </div>
  )
}

export default AdmissionList
