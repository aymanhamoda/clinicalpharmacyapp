import React, { useState, useEffect } from 'react'
import { Form, FormGroup, FormLabel, Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getTeamDetails, updateTeamDetails } from '../actions/teamActions'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import specialityList from '../data/speciality'

const TeamEditScreen = ({ match }) => {
  const teamId = match.params.id

  const [name, setName] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [members, setMembers] = useState([])
  const [newMember, setNewMember] = useState({ id: '', user: '' })
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
    if (newMember) {
      setMessage('')
      const isRepeated = members.map((m) => m.user === newMember.user)

      if (isRepeated[0]) {
        setMessage('This member already added')
      } else {
        setMembers([...members, newMember])
      }
    }
  }
  const deleteMember = (e) => {
    setMembers(
      members.filter((m) => {
        return m.user !== e
      })
    )
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
              <Form onSubmit={submitHandler}>
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
                  <>
                    <Table className="table table-hover" key={m._id}>
                      <tbody>
                        <tr className="table-secondary">
                          <th scope="row">{m.user}</th>
                          {m.user !== userInfo.email && (
                            <td>
                              <i
                                onClick={() => deleteMember(m.user)}
                                className="fas fa-trash float-right"></i>
                            </td>
                          )}
                        </tr>
                      </tbody>
                    </Table>
                  </>
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
                        })
                      }></Form.Control>
                  </Form.Group>
                  <FormGroup>
                    <Form.Label>.</Form.Label>
                    <Button
                      onClick={() => handleMembers()}
                      type="submit"
                      className="col"
                      variant="primary">
                      <i className="fas fa-plus"></i>
                    </Button>
                  </FormGroup>
                </div>
                <FormGroup>
                  <Button type="submit" variant="primary ">
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
