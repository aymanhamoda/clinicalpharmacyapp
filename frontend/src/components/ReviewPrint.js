import React, { useEffect, useState } from 'react'
import {
  Document,
  Font,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer'
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import Header from './pdfComponents/Header'
import Form from './pdfComponents/Form'
import List from './pdfComponents/List'
import { useSelector } from 'react-redux'
import Subtitle from './pdfComponents/Subtitle'

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  viewer: {
    height: window.innerHeight,
  },
})

Font.register({
  family: 'Open Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
})

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
})

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
})

Font.register({
  family: 'Amiri',
  src: `/fonts/Tajawal-Medium.ttf`,
})

const ReviewPrint = ({ printedReview, setPrintedReview }) => {
  const [showPrint, setShowPrint] = useState(false)
  const [reviewDate, setReviewDate] = useState('')
  const [reviewer, setReviewer] = useState('')
  const [clinicalNote, setClinicalNote] = useState('')
  const [drugErrs, setDrugErrs] = useState([
    {
      idx: 1,
      errDrug: '',
      errType: '',
      errNote: '',
    },
  ])

  const patientDetails = useSelector((state) => state.patientDetails)
  const { patient } = patientDetails

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

  useEffect(() => {
    if (printedReview) {
      console.log(printedReview)
      setReviewDate(printedReview.reviewDate)
      setClinicalNote(printedReview.clinicalNote)
      setDrugErrs(printedReview.drugErrs)
      if (members) {
        setReviewer(
          `${members.find((m) => m._id === printedReview.user).firstName} ${
            members.find((m) => m._id === printedReview.user).lastName
          }`
        )
      }
      setShowPrint(true)
    } else {
      setShowPrint(false)
      setReviewDate('')
      setClinicalNote('')
      setDrugErrs('')
    }
  }, [printedReview])
  return (
    <Modal size="lg" show={showPrint}>
      <ModalTitle>
        <div className="row justify-content-end pr-4 py-2">
          <Button onClick={() => setPrintedReview()}>Close</Button>
        </div>
      </ModalTitle>

      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document title="Print Review">
          {/*render a single page*/}
          <Page size="A4" style={styles.page} wrap={false}>
            <Header
              title="CLINICAL PHARMACY RECOMMENDETIONS"
              team={team && team.name}
              reviewer={reviewer}
              editDate={reviewDate.substring(0, 10)}
            />
            <Subtitle children="Patient Details:" />
            <Form
              label="Patient Name: "
              arabicValue={
                patient &&
                ` ${patient.firstName} ${patient.middleName} ${patient.lastName}`
              }
            />
            <Form
              label="Birthdate: "
              value={
                patient &&
                patient.birthdate &&
                patient.birthdate.substring(0, 10)
              }
            />
            <Form
              label="Admission Date: "
              value={admission.admissionDate.substring(0, 10)}
            />
            <Subtitle children="Recommendation(s):" />
            {drugErrs &&
              drugErrs.map((drugErr) => (
                <>
                  <Form
                    label="Type Of Error: "
                    value={
                      errTypeList &&
                      errTypeList.find((i) => i._id === drugErr.errType).label
                    }
                  />
                  <Form
                    label="Drug Of Error: "
                    value={
                      drugs &&
                      drugs.find((i) => i._id === drugErr.errDrug) &&
                      drugs.find((i) => i._id === drugErr.errDrug).label
                    }
                  />
                  <Form label="Notes: " value={drugErr.errNote} />
                  {/* <Text
                    render={() => {
                      return (
                        // <h1>ggg</h1>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${drugErr.errNote}`,
                          }}
                        />
                      )
                    }}
                  /> */}
                </>
              ))}
          </Page>
        </Document>
      </PDFViewer>
    </Modal>
  )
}

export default ReviewPrint
