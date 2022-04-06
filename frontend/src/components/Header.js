import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Image,
  Navbar,
  Nav,
  Container,
  NavDropdown,
  NavbarBrand,
} from 'react-bootstrap'

import { getUserDetails, logout } from '../actions/userActions'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const logoutHandler = () => {
    dispatch(logout())
  }
  const history = useHistory()
  useEffect(() => {
    if (!user) {
      if (userInfo) {
        dispatch(getUserDetails(userInfo._id))
      } else {
        history.push('/')
      }
    }
  }, [dispatch, userInfo, user, history])

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Nav.Link>
              <i className="fas fa-home" style={{ color: 'gold' }}></i>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Navbar.Brand>
              <span style={{ color: 'gold' }}> Clinical Pharmacy App</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {user ? (
                <NavDropdown
                  title={`${user.firstName} ${user.lastName}`}
                  id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/register">
                  <Nav.Link>
                    <NavbarBrand style={{ color: 'gold' }}>
                      Create Free Account
                    </NavbarBrand>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
