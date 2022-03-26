import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmissionDetails } from '../actions/admissionActions'
import { getReviewList } from '../actions/reviewActions'
import { getTeamMemberDetails } from '../actions/teamActions'
import Loader from './Loader'
import { listDrugs } from '../actions/drugActions'
import { listDrugErrTypes } from '../actions/errTypeActions'

const ReviewList = ({ admissionId }) => {
  const reviewList = useSelector((state) => state.reviewList)
  const { reviews } = reviewList

  const admissionDetails = useSelector((state) => state.admissionDetails)
  const { admission } = admissionDetails

  const createdReviews = useSelector((state) => state.createdReviews)
  const { newReview } = createdReviews

  const teamMembers = useSelector((state) => state.teamMembers)
  const { members } = teamMembers

  const drugList = useSelector((state) => state.drugList)
  const { drugs } = drugList

  const errTypes = useSelector((state) => state.errTypes)
  const { errTypeList } = errTypes

  const dispatch = useDispatch()
  useEffect(() => {
    if (!admission || admission._id !== admissionId) {
      dispatch(getAdmissionDetails(admissionId))
    } else {
      dispatch(getReviewList(admission))
      dispatch(getTeamMemberDetails(admission.team))
    }
    if (!drugs) {
      dispatch(listDrugs())
    }
    if (!errTypeList) {
      dispatch(listDrugErrTypes())
    }
  }, [admissionId, newReview, drugs, errTypeList])
  return (
    <div>
      {' '}
      <h4 className="lead row justify-content-center">Reviews</h4>
      {!reviews ? (
        <Loader />
      ) : (
        reviews.map((r) => (
          <div key={r._id}>
            Review Date: {r.reviewDate.substring(0, 10)}
            <div className="container">
              {' '}
              Progress Notes:{' '}
              <div
                className="text-warning"
                dangerouslySetInnerHTML={{
                  __html: `${r.clinicalNote}`,
                }}
              />
            </div>
            <h4 className="lead row justify-content-center">Errors</h4>
            {r.drugErrs.map((drugErr) => (
              <div className="container" key={drugErr._id}>
                <div className="row ">
                  <div className="col-sm-6">
                    {errTypeList &&
                      errTypeList.find((i) => i._id === drugErr.errType)
                        .label}{' '}
                  </div>
                  <div className="col-sm-6">
                    {drugs &&
                      drugs.find((i) => i._id === drugErr.errDrug).label}{' '}
                  </div>
                </div>

                <div className="row">
                  <div className="col text-warning">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${drugErr.errNote}`,
                      }}
                    />
                  </div>
                </div>

                <hr style={{ backgroundColor: 'red' }} />
              </div>
            ))}
            <div className="row justify-content-end pr-5">
              <span>
                Edited by:{' '}
                {members && members.find((m) => m._id === r.user).firstName}{' '}
                {members && members.find((m) => m._id === r.user).lastName}
              </span>
            </div>
            <hr style={{ backgroundColor: 'white' }} />
          </div>
        ))
      )}
    </div>
  )
}

export default ReviewList
