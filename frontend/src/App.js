import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import UserProfileScreen from './screens/UserProfileScreen'

import PatientListScreen from './screens/PatientListScreen'
import AdmissionListScreen from './screens/AdmissionListScreen'
import ReviewListScreen from './screens/ReviewListScreen'
import { PrintPrescription } from './components/printPrescription'
import TeamListScreen from './screens/TeamListScreen'
import TeamEditScreen from './screens/TeamEditScreen'
import ReviewPrint from './components/ReviewPrint'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/reviewprint/:id" component={ReviewPrint} />
          <Route path="/profile" component={UserProfileScreen} />
          <Route path="/register" component={RegisterScreen} />

          <Route path="/teamlist" component={TeamListScreen} exact />
          <Route path="/teamlist/:id" component={TeamEditScreen} />

          <Route path="/patient/:id" component={AdmissionListScreen} />
          <Route path="/patientlist/:id" component={PatientListScreen} exact />
          <Route path="/admissions/:id" component={ReviewListScreen} exact />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
