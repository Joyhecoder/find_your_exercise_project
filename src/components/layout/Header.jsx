import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link } from 'react-router-dom'



const Header = () => {
    return (
        <>
        <Navbar bg="light" expand="lg" className="navBar">
            <Container>
                <Navbar.Brand href="/">Exercise Buddy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to = "/">Home</Link>
                        <Link className="nav-link" to = "/exercise">Find Your Exercise</Link>
                        <Link className="nav-link" to = "/details/:exerciseID">Detail</Link>
                        <Link className="nav-link" to ="/mylist">My List</Link>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
  }
  
  export default Header
  