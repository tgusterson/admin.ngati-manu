import React from "react"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Header = ({ user, netlifyIdentity }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as="li"><Link to="/" className="nav-link">Ngati Manu Admin Portal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="User Management" id="basic-nav-dropdown" as="li">
              <NavDropdown.Item as="li"><Link to="/pending-users/" className="nav-link">Review Applications</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="li"><Link to="/rejected-users/" className="nav-link">Manage Rejected Applications</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="li"><Link to="/approved-users/" className="nav-link">Approved User Database</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as="li"><Link to="/archived-users/" className="nav-link">Archived Users</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button className="my-3" onClick={() => netlifyIdentity.open()}>{user ? "Log Out" : "Log In"}</Button>
      </Navbar>
      <div style={{ marginBottom: '2rem' }} />
    </>
  )
}

export default Header