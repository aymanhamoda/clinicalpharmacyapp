import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReviewList } from '../actions/reviewActions'
import {
  REVIEW_CREATE_RESET,
  REVIEW_DELETE_RESET,
  REVIEW_LIST_RESET,
  REVIEW_UPDATE_RESET,
} from '../constants/reviewConstants'
import Loader from './Loader'
import ReviewUpdateModal from './ReviewUpdateModal'

const ReviewList = ({ admissionId, patientId, teamId }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [selectedReview, setSelectedReview] = useState()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const teamDetails = useSelector((state) => state.teamDetails)
  const { team } = teamDetails

  const teamMemberStore = useSelector((state) => state.teamMemberStore)
  const { members } = teamMemberStore

  const drugList = useSelector((state) => state.drugList)
  const { drugs } = drugList

  const errTypes = useSelector((state) => state.errTypes)
  const { errTypeList } = errTypes

  const admissionDetails = useSelector((state) => state.admissionDetails)
  const { admission } = admissionDetails

  const reviewListStore = useSelector((state) => state.reviewListStore)
  const { reviews } = reviewListStore

  const createdReviewStore = useSelector((state) => state.createdReviewStore)
  const { newReview } = createdReviewStore

  const deletedReviewStore = useSelector((state) => state.deletedReviewStore)
  const { deletedReview } = deletedReviewStore

  const updatedReviewStore = useSelector((state) => state.updatedReviewStore)
  const { updatedReview } = updatedReviewStore

  const handleUpdate = (r) => {
    setSelectedReview(r)
  }
  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedReview) {
      setShowUpdateModal(true)
    } else {
      setShowUpdateModal(false)
    }

    if (!reviews || admission._id !== admissionId) {
      dispatch(getReviewList(admissionId))
    }

    if (updatedReview || deletedReview || newReview) {
      dispatch({ type: REVIEW_DELETE_RESET })
      dispatch({ type: REVIEW_CREATE_RESET })
      dispatch({ type: REVIEW_UPDATE_RESET })

      dispatch({ type: REVIEW_LIST_RESET })
    }
  }, [
    dispatch,
    reviews,
    admission,
    selectedReview,
    showUpdateModal,
    reviews,
    newReview,
    updatedReview,
    deletedReview,
    teamId,
    team,
  ])
  return (
    <div>
      <ReviewUpdateModal
        setSelectedReview={setSelectedReview}
        selectedReview={selectedReview}
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        admissionId={admissionId}
        patientId={patientId}
        teamId={teamId}
      />{' '}
      <h4 className="lead row justify-content-center">DAILY REVIEW DETAILS</h4>
      <hr style={{ backgroundColor: 'gold' }} />
      {!reviews || !drugs ? (
        <Loader />
      ) : (
        reviews.map((r) => (
          <div key={r._id}>
            Review Date: {r.reviewDate.substring(0, 10)}
            <div>
              {' '}
              Clinical Notes:{' '}
              <div
                className="text-warning"
                dangerouslySetInnerHTML={{
                  __html: `${r.clinicalNote}`,
                }}
              />
            </div>
            <hr style={{ backgroundColor: 'red' }} />
            <h4 className="lead row justify-content-center">NOTE OF ERRORS </h4>
            <hr style={{ backgroundColor: 'red' }} />
            {r.drugErrs.map((drugErr) => (
              <div key={drugErr._id}>
                <div className="row ">
                  <div className="col-sm-6">
                    {errTypeList &&
                      errTypeList.find((i) => i._id === drugErr.errType)
                        .label}{' '}
                  </div>
                  <div className="col-sm-6">
                    {drugs.find((i) => i._id === drugErr.errDrug).label}{' '}
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
                {members &&
                  members.find((m) => m._id === r.user) &&
                  members.find((m) => m._id === r.user).firstName}{' '}
                {members &&
                  members.find((m) => m._id === r.user) &&
                  members.find((m) => m._id === r.user).lastName}
                {userInfo._id === r.user && (
                  <i
                    onClick={() => handleUpdate(r)}
                    className="ml-2 fas fa-edit text-warning"></i>
                )}
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
