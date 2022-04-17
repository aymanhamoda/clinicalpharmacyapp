import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import { listDrugRoots } from '../actions/drugActions'
import Loader from './Loader'
import Message from './Message'

const ReviewTemplateModal = ({
  showTemplates,
  setShowTemplates,
  selectedDgErr,
}) => {
  const [templates, setTemplates] = useState([])
  const [message, setMesaage] = useState('')

  const drugRootStore = useSelector((state) => state.drugRootStore)
  const { drugRoots } = drugRootStore

  const copyTemplate = (t) => {
    selectedDgErr.errNote = t.label
    setShowTemplates(false)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (!drugRoots) {
      dispatch(listDrugRoots())
    } else {
      if (selectedDgErr) {
        if (selectedDgErr.errDrug !== '' && selectedDgErr.errType !== '') {
          const templateRoot = drugRoots.find((r) =>
            r.tradeLabels.find(
              (t) => t._id.toString() === selectedDgErr.errDrug
            )
          )

          console.log(selectedDgErr)
          setTemplates(
            templateRoot.errTemps.filter(
              (t) => t.errType.toString() === selectedDgErr.errType
            )
          )
        } else {
          setMesaage(
            'Specify the drug and type of error  to show the corresponding templates'
          )
        }
      }
    }
  }, [selectedDgErr])
  return (
    <>
      {selectedDgErr && (
        <Modal
          size="lg"
          show={showTemplates}
          onHide={() => setShowTemplates(false)}
          backdrop="static"
          keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Templates</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              {message && <Message children={message} varient="warning" />}
              {!drugRoots ? (
                <Loader />
              ) : (
                templates.map((t) => (
                  <div key={t._id} className="row justify-content-center">
                    <div
                      onClick={() => copyTemplate(t)}
                      className="row btn btn-block m-2  btn-outline-warning"
                      key={t._id}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${t.label}`,
                        }}
                      />
                    </div>
                  </div>
                ))
              )}
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowTemplates(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}

export default ReviewTemplateModal
