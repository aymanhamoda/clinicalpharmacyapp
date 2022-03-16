import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Form, FormLabel, Button, FormGroup, Container } from 'react-bootstrap'
import specialityList from '../data/speciality'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import { Link } from 'react-router-dom'

const TeamListScreen = () => {
  const [name, setName] = useState('')
  const [admin, setAdmin] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [members, setMembers] = useState([])
  const [adminTeams, setAdminTeams] = useState([])
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
      console.log(error)
    }
  }
  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    } else {
      if (!admin) {
        setAdmin(userInfo._id)
        setMembers([{ id: Math.random(), user: userInfo._id }])
      }

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        axios
          .get(`/api/teams/userteams/${userInfo._id}`, config)
          .then((res) => setAdminTeams(res.data))
      } catch (error) {
        setError(error)
        console.log(error)
      }
    }
  }, [userInfo, loading])
  return (
    <Container>
      {message && <Message children={message} varient="danger" />}
      {error && <Message children={error} varient="danger" />}

      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="teamName" className="col-sm-12">
            <Form.Label>Team Name</Form.Label>
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
      </FormContainer>
      {adminTeams && (
        <FormContainer>
          <h1>Your teams</h1>
          {adminTeams.map((t) => (
            <Link key={t._id} to={`/teamlist/${t._id}`}>
              <h1 className="btn btn-outline-success btn-block">{t.name}</h1>
            </Link>
          ))}
        </FormContainer>
      )}
    </Container>
  )
}

export default TeamListScreen
