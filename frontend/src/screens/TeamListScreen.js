import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Form, FormLabel, Button, FormGroup, Table } from 'react-bootstrap'
import specialityList from '../data/speciality'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import { Link } from 'react-router-dom'

const TeamListScreen = () => {
  const [name, setName] = useState('')
  const [admin, setAdmin] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [members, setMembers] = useState([])
  const [userTeams, setUserTeams] = useState()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const history = useHistory()

  const submitHandler = async () => {
    setLoading(true)
    const newTeam = { name, admin, specialty, members }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post('/api/teams', newTeam, config).then(setLoading(false))
    } catch (error) {
      setError(error)
    }
  }
  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    } else {
      if (!admin) {
        setAdmin(userInfo.email)
        setMembers([{ id: Math.random(), user: userInfo.email }])
      }

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        axios
          .get(`/api/teams/?user=${userInfo.email}`, config)
          .then((res) => setUserTeams(res.data))
      } catch (error) {
        setError(error)
      }
    }
  }, [userInfo, history])
  return (
    <FormContainer>
      <>
        {message && <Message children={message} varient="danger" />}
        {error && <Message children={error} varient="danger" />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="teamName" className="col-sm-12">
            <Form.Label>Team Name </Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter team name"
              value={name}
              onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group controlId="speciality" className="col-sm-12">
            <FormLabel>Specialty</FormLabel>
            <select
              className="custom-select"
              type="name"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}>
              {specialityList.map((specialityItem) => (
                <option
                  value={specialityItem._id}
                  disabled={specialityItem.disabled}>
                  {specialityItem.name}
                </option>
              ))}
            </select>
          </Form.Group>
          <FormGroup>
            <Button type="submit" className="ml-3" variant="primary">
              Create Team
            </Button>
          </FormGroup>
        </Form>
      </>
      {loading || !userInfo || !userTeams ? (
        <Loader />
      ) : (
        <>
          <h1>Your Teams</h1>
          {userTeams.map((t) => (
            <>
              <Table className="table table-hover" key={t._id}>
                <tbody>
                  <tr className="table-primary">
                    <th scope="row">{t.name}</th>

                    <>
                      <td className="float-right">
                        <Link
                          className="text-white"
                          key={t._id}
                          to={`/teamlist/${t._id}`}>
                          {t.admin === userInfo.email ? (
                            <>
                              <i className="fas fa-edit"></i> Admin
                            </>
                          ) : (
                            <>
                              <i className="fas fa-user-friends"></i> Team
                            </>
                          )}{' '}
                        </Link>
                      </td>
                    </>

                    <td className="float-right">
                      <Link
                        className="text-white"
                        key={t._id}
                        to={`/patientlist/${t._id}`}>
                        <i className="far fa-address-book"></i> Patients
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </>
          ))}
        </>
      )}
    </FormContainer>
  )
}

export default TeamListScreen
