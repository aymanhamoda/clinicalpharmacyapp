import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmissionDetails } from '../actions/admissionActions'
import { getReviewList } from '../actions/reviewActions'
import { getUserDetails } from '../actions/userActions'
import FormContainer from './FormContainer'
import Loader from './Loader'

const ReviewList = ({ admissionId }) => {
  const [labeledReview, setLabeledReview] = useState([])

  const reviewList = useSelector((state) => state.reviewList)
  const { reviews } = reviewList

  const admissionDetails = useSelector((state) => state.admissionDetails)
  const { admission } = admissionDetails

  const dispatch = useDispatch()
  useEffect(() => {
    if (!admission || admission._id !== admissionId) {
      dispatch(getAdmissionDetails(admissionId))
    } else {
      dispatch(getReviewList(admission))
    }
  }, [admissionId])
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
            <div className="row justify-content-end"> {r.user}</div>
          </div>
        ))
      )}
      <hr style={{ backgroundColor: 'white' }} />
    </>
  )
}

export default ReviewList
