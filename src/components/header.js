import React from "react"
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({ children }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Ngati Manu Admin Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as="li"><Link to="/" className="nav-link">Link 1</Link></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as="li">
                <Link to="/tahuhu/" className="nav-link">Introduction to Tahuhu</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header