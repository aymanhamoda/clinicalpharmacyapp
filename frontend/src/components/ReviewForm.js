import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, FormGroup } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import FormContainer from './FormContainer'

import { createReview } from '../actions/reviewActions'

const ReviewForm = ({ admissionId, patientId, teamId }) => {
  const [reviewDate, setReviewDate] = useState('')
  const [clinicalNote, setClinicalNote] = useState('')

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createReview({
        admissionId,
        userId: userInfo._id,
        patientId,
        teamId,
        reviewDate,
        clinicalNote,
      })
    )
  }
  return (
    <>
      <Form>
        <Form.Group controlId="reviewDate">
          <Form.Label>
            <h2>Review Date</h2>
          </Form.Label>
          <Form.Control
            type="date"
            value={reviewDate}
            onChange={(e) => setReviewDate(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId="clinicalNote">
          <Form.Label>
            <h2>clinical Notes</h2>
          </Form.Label>
          <div className="text-dark">
            {' '}
            <CKEditor
              editor={ClassicEditor}
              data={clinicalNote}
              onChange={(event, editor) => {
                const data = editor.getData()
                setClinicalNote(data)
              }}
            />
          </div>
        </Form.Group>
        <div className="row justify-content-end">
          <Button className="btn-primary" onClick={(e) => submitHandler(e)}>
            Add Review
          </Button>
        </div>
      </Form>
    </>
  )
}

export default ReviewForm
