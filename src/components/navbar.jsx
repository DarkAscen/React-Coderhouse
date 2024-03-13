import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="body-tertiary" expand="lg" id="navigBar" data-bs-theme="dark">
            <Navbar.Brand>Game Partner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Componentes</NavDropdown.Item>
                        <NavDropdown.Item href="#">Perifericos</NavDropdown.Item>
                        <NavDropdown.Item href="#">Escritorio</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">🔎</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;