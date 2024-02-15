import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './navbar.css';

const ProfessionalNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/">
            {/* <img src="your-logo.png" alt="Your Brand Logo" /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Services">
                <NavDropdown.Item href="/service1">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="/service2">Service 2</NavDropdown.Item>
                <NavDropdown.Item href="/service3">Service 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default ProfessionalNavbar;
