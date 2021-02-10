import React from "react"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Header = ({ setDialog, isLoggedIn }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Ngati Manu Admin Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as="li"><Link to="/pending-users/" className="nav-link">Review Pending Users</Link></Nav.Link>
            <Nav.Link as="li"><Link to="/rejected-users/" className="nav-link">Manage Rejected Users</Link></Nav.Link>
          </Nav>
          <Button className="btn" onClick={() => setDialog(true)}>
            {isLoggedIn ? `Log Out` : "Log In"}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header