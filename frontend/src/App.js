import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import DoctorScreen from './screens/DoctorScreen'
import SecretaryListScreen from './screens/SecretaryListScreen'
import PatientListScreen from './screens/PatientListScreen'
import PatientEditScreen from './screens/PatientEditScreen'
import { PrintPrescription } from './components/printPrescription'
import TeamListScreen from './screens/TeamListScreen'
import TeamEditScreen from './screens/TeamEditScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/printprescription/:id" component={PrintPrescription} />
          <Route path="/profile" component={DoctorScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/doctor/secretary" component={SecretaryListScreen} />

          <Route path="/teamlist" component={TeamListScreen} exact />
          <Route path="/teamlist/:id" component={TeamEditScreen} />

          <Route path="/doctor/patient/:id" component={PatientEditScreen} />
          <Route
            path="/doctor/patientlist/:pageNumber"
            component={PatientListScreen}
            exact
          />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
