import React, { useState, useEffect } from 'react'
import {
  Form,
  FormGroup,
  FormLabel,
  Button,
  Container,
  Row,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getTeamDetails, updateTeamDetails } from '../actions/teamActions'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import specialityList from '../data/speciality'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'

const TeamEditScreen = ({ match }) => {
  const teamId = match.params.id

  const [name, setName] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [members, setMembers] = useState([])
  const [newMember, setNewMember] = useState({
    id: '',
    user: '',
    canRead: 'true',
    canEdit: 'true',
    disabled: 'false',
  })
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const teamDetails = useSelector((state) => state.teamDetails)
  const { team } = teamDetails

  const teamUpdates = useSelector((state) => state.teamUpdates)
  const { team: updatedTeam, loading } = teamUpdates

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateTeamDetails({ teamId, name, specialty, members }))
  }
  const handleMembers = () => {
    if (newMember.user !== '') {
      setMessage('')
      const isRepeated = members.map((m) => m.user === newMember.user)
      console.log(isRepeated)
      if (!isRepeated[0]) {
        setMessage('This member already added')
      } else {
        setMembers([...members, newMember])
      }
    } else {
      setMessage('User email is required')
    }
  }

  const editChange = (e) => {
    setMembers([
      ...members.filter((m) => {
        return m.user !== e.user
      }),
      {
        id: e._id,
        user: e.user,
        canEdit: !e.canEdit,
        disabled: false,
      },
    ])
  }
  const deleteMember = (e) => {
    setMembers([
      ...members.filter((m) => {
        return m.user !== e.user
      }),
      {
        id: e._id,
        user: e.user,
        canEdit: false,
        disabled: !e.disabled,
      },
    ])
  }
  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    } else {
      if (team) {
        if (team.admin !== userInfo.email) {
          history.push('/')
        }
      }
    }
    if (!team) {
      dispatch(getTeamDetails(teamId))
    } else {
      setName(team.name)
      setSpecialty(team.specialty)
      setMembers(team.members)
    }
  }, [userInfo, teamId, team])

  return (
    <>
      <div>
        {!team || !userInfo || loading ? (
          <Loader />
        ) : (
          <>
            <FormContainer>
              <h1 className="ml-3">Update Team Details</h1>
              <Form>
                <Form.Group controlId="teamName" className="col-sm-12">
                  <Form.Label>Team Name</Form.Label>
                  <Form.Control
                    type="name"
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
                <h1>Members</h1>
                {message && <Message children={message} variant="danger" />}

                {members.map((m) => (
                  <ListGroup>
                    <ListGroupItem className="m-3">
                      <Container key={m._id}>
                        <Row>
                          <h1 className="lead">{m.user}</h1>
                        </Row>
                        <Row>
                          {m.user !== userInfo.email && (
                            <>
                              <FormGroup className="col-sm-6">
                                <FormCheckInput
                                  checked={m.canEdit}
                                  onChange={() => editChange(m)}
                                  type="checkbox"></FormCheckInput>{' '}
                                <FormLabel>Can Edit</FormLabel>{' '}
                              </FormGroup>
                              <FormGroup className="col-sm-6">
                                <FormCheckInput
                                  checked={m.disabled}
                                  onChange={() => deleteMember(m)}
                                  type="checkbox"></FormCheckInput>{' '}
                                <FormLabel>Disabled</FormLabel>
                              </FormGroup>
                            </>
                          )}
                        </Row>{' '}
                      </Container>
                    </ListGroupItem>
                  </ListGroup>
                ))}

                <div className="row">
                  <Form.Group controlId="newMember" className="col">
                    <Form.Label>Add new Member's email</Form.Label>
                    <Form.Control
                      type="email"
                      value={newMember.email}
                      onChange={(e) =>
                        setNewMember({
                          id: Math.random(),
                          user: e.target.value,
                          canEdit: true,
                          disabled: false,
                        })
                      }></Form.Control>
                  </Form.Group>
                  <FormGroup>
                    <Form.Label>.</Form.Label>
                    <Button
                      onClick={() => handleMembers()}
                      className="col"
                      variant="primary">
                      <i className="fas fa-plus"></i>
                    </Button>
                  </FormGroup>
                </div>
                <FormGroup>
                  <Button onClick={(e) => submitHandler(e)} variant="primary ">
                    Update
                  </Button>
                </FormGroup>
              </Form>
            </FormContainer>
          </>
        )}
      </div>
    </>
  )
}

export default TeamEditScreen
