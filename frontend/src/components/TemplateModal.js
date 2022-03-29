import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import { listDrugRoots } from '../actions/drugActions'
import Loader from './Loader'

const TemplateModal = ({ showTemplates, setShowTemplates, selectedDgErr }) => {
  const [templates, setTemplates] = useState([])

  const drugRoots = useSelector((state) => state.drugRoots)
  const { drugRoot } = drugRoots

  const copyTemplate = (t) => {
    console.log(selectedDgErr)
    selectedDgErr.errNote = t.label
    setShowTemplates(false)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(selectedDgErr)
    if (!drugRoot) {
      dispatch(listDrugRoots())
    } else {
      if (selectedDgErr) {
        if (selectedDgErr.errDrug !== '' && selectedDgErr.errType !== '') {
          const templateRoot = drugRoot.find((r) =>
            r.tradeLabels.find((t) => t._id.toString() == selectedDgErr.errDrug)
          )

          setTemplates(
            templateRoot.errTemps.filter(
              (t) => t.errType.toString() === selectedDgErr.errType
            )
          )
        }
      }
    }
  }, [selectedDgErr])
  return (
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
          {!drugRoot ? (
            <Loader />
          ) : (
            templates.map((t) => (
              <div
                onClick={() => copyTemplate(t)}
                className="row btn btn-block py-2 justify-content-center btn-outline-warning"
                key={t._id}>
                {t.label}{' '}
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
  )
}

export default TemplateModal
