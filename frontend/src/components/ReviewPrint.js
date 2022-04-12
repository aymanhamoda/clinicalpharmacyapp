import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getAdmissionDetails } from '../actions/admissionActions'
import { getPatientDetails } from '../actions/patientActions'
import { getReviewDetails } from '../actions/reviewActions'
import { getTeamDetails, getTeamMemberDetails } from '../actions/teamActions'
import { Col, Container, Row } from 'react-bootstrap'
import { listDrugErrTypes } from '../actions/errTypeActions'

const ReviewPrint = ({ match }) => {
  const reviewId = match.params.id

  const [reviewer, setReviewer] = useState('')

  const patientDetails = useSelector((state) => state.patientDetails)
  const { patient } = patientDetails

  const reviewDetailsStore = useSelector((state) => state.reviewDetailsStore)
  const { review } = reviewDetailsStore

  const admissionDetails = useSelector((state) => state.admissionDetails)
  const { admission } = admissionDetails

  const teamDetails = useSelector((state) => state.teamDetails)
  const { team } = teamDetails

  const teamMemberStore = useSelector((state) => state.teamMemberStore)
  const { members } = teamMemberStore

  const errTypes = useSelector((state) => state.errTypes)
  const { errTypeList } = errTypes

  const drugList = useSelector((state) => state.drugList)
  const { drugs } = drugList

  const dispatch = useDispatch()

  useEffect(() => {
    if (!review || review._id !== reviewId) {
      dispatch(getReviewDetails(reviewId))
    } else {
      if (!team || team._id !== review.team) {
        dispatch(getTeamDetails(review.team))
        dispatch(getTeamMemberDetails(review.team))
      }

      if (!admission || admission._id !== review.admission) {
        dispatch(getAdmissionDetails(review.admission))
      }
      if (!patient || patient._id !== review.patient) {
        dispatch(getPatientDetails(review.patient))
      }
    }
    if (review && team && admission && patient && members) {
      window.print()
      window.history.back()
    }
    if (!errTypeList) {
      dispatch(listDrugErrTypes())
    }
  }, [review, reviewId, team, patient, admission, errTypeList])
  return (
    <>
      {!team || !review || !members || !admission || !patient ? (
        <>Takes minutes to prepare</>
      ) : (
        <div className="text-dark">
          <div className="row justify-content-center">
            <h1>CLINICAL PHARMACY RECOMMENDETIONS</h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <h3>Patient Details</h3>
              </div>
              <div className="row ">
                <div className="col">
                  Name:{' '}
                  {patient &&
                    ` ${patient.firstName} ${patient.middleName} ${patient.lastName}`}
                </div>
              </div>
              <div className="row ">
                <div className="col">
                  Birthdate:{' '}
                  {patient &&
                    patient.birthdate &&
                    patient.birthdate.substring(0, 10)}
                </div>
              </div>
              <div className="row ">
                <div className="col">
                  Admission Date: {admission.admissionDate.substring(0, 10)}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {review.drugErrs.map((drugErr) => (
              <div className="col">
                <div className="row">
                  <h3>Medication Errors</h3>
                </div>
                <div className="row">
                  <div className="col">
                    Type Of Error:{' '}
                    {errTypeList &&
                      errTypeList.find((i) => i._id === drugErr.errType) &&
                      errTypeList.find((i) => i._id === drugErr.errType).label}
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    Drug Of Error:{' '}
                    {drugs &&
                      drugs.find((i) => i._id === drugErr.errDrug) &&
                      drugs.find((i) => i._id === drugErr.errDrug).label}
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    Description:
                    <div className="col">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${drugErr.errNote}`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row ">
            <div className="col">
              <div className="row justify-content-end">
                Edited by:{' '}
                {members &&
                  review &&
                  members.find((m) => m._id === review.user) &&
                  `${members.find((m) => m._id === review.user).firstName} ${
                    members.find((m) => m._id === review.user).lastName
                  }`}
              </div>
              <div className="row justify-content-end">
                Edited at: {review.reviewDate.substring(0, 10)}
              </div>
              <div className="row justify-content-end">{team && team.name}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ReviewPrint
