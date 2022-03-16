import React from 'react'
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

import { logout } from '../actions/userActions/doctorActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Nav.Link>
              <Image src={'/images/logo.png'} fluid />
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Navbar.Brand>
              <span style={{ color: 'gold' }}>Clinical Pharmacy App</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {userInfo ? (
                <NavDropdown
                  title={`${userInfo.firstName} ${userInfo.lastName}`}
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
