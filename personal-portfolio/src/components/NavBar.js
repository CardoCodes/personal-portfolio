import { useState } from "react";
import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export const Navbar = () =>{
   <Navbar expand="lg">
        <Container> 
            <NavbarBrand href="#home">
                <img src={''} alt="logo" />
            </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </NavbarToggle>
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Project</Nav.Link>
                </Nav>
            </NavbarCollapse>
        </Container>
   </Navbar>
}
