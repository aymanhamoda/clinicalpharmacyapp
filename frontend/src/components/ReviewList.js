import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmissionDetails } from '../actions/admissionActions'
import { getReviewList } from '../actions/reviewActions'
import { getTeamMemberDetails } from '../actions/teamActions'
import { REVIEW_LIST_RESET } from '../constants/reviewConstants'
import Loader from './Loader'

const ReviewList = ({ admissionId }) => {
  const reviewList = useSelector((state) => state.reviewList)
  const { reviews } = reviewList

  const admissionDetails = useSelector((state) => state.admissionDetails)
  const { admission } = admissionDetails

  const createdReviews = useSelector((state) => state.createdReviews)
  const { newReview } = createdReviews

  const teamMembers = useSelector((state) => state.teamMembers)
  const { members } = teamMembers

  const dispatch = useDispatch()
  useEffect(() => {
    if (!admission || admission._id !== admissionId) {
      dispatch(getAdmissionDetails(admissionId))
    } else {
      dispatch(getReviewList(admission))
      dispatch(getTeamMemberDetails(admission.team))
    }
  }, [admissionId, newReview])
  return (
    <>
      {' '}
      <h4 className="lead row justify-content-center">Reviews</h4>
      {!reviews ? (
        <Loader />
      ) : (
        reviews.map((r) => (
          <div key={r._id}>
            {r.reviewDate.substring(0, 10)}
            <div
              dangerouslySetInnerHTML={{
                __html: `${r.clinicalNote}`,
              }}
            />
            <div className="row justify-content-end">
              {' '}
              <span>
                {members && members.find((m) => m._id === r.user).firstName}{' '}
                {members && members.find((m) => m._id === r.user).lastName}
              </span>
            </div>
            <hr
              style={{ backgroundColor: 'white', borderTop: '2px dashed #999' }}
            />
          </div>
        ))
      )}
    </>
  )
}

export default ReviewList
