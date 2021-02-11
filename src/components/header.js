import React from "react"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = ({ user, netlifyIdentity }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as="li"><Link to="/" className="nav-link">Ngati Manu Admin Portal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as="li"><Link to="/pending-users/" className="nav-link">Review Pending Users</Link></Nav.Link>
            <Nav.Link as="li"><Link to="/rejected-users/" className="nav-link">Manage Rejected Users</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={() => netlifyIdentity.open()}>{user ? "Logout" : "Login"}</Button>
      </Navbar>
    </>
  )
}

export default Header