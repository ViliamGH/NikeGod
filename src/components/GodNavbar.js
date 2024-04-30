import "../App.css";
import React from "react"
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function GodNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-secondary">
            <Container>
                <Navbar.Brand href="#">God</Navbar.Brand>
                <Navbar.Toggle aria-controls="GodNav"></Navbar.Toggle>    {/* these is the icon of 3 lines on navbar */}
                <Navbar.Collapse id="GodNav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <NavDropdown title="Product" id="GodDropDown">
                            <NavDropdown.Item href="#">Men</NavDropdown.Item>
                            <NavDropdown.Item href="#">Women</NavDropdown.Item>
                            <NavDropdown.Item href="#">Kid</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default GodNavbar