import React from "react"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ({ children }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Ngati Manu Admin Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as="li"><Link to="/pending-users/" className="nav-link">Review Pending Users</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header