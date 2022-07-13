import { useEffect, useState } from "react";
import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Navbar = () =>{

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {setScrolled(true);} else {setScrolled(false);}
        }
        window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);}, [])


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
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={navIcon1} alt=""/></a>
                        <a href="#"><img src={navIcon2} alt=""/></a>
                        <a href="#"><img src={navIcon3} alt=""/></a>
                    </div>
                    <button className="test" onClick={() => console.log('connect')}><span>Let's Connect</span>
                </span>

            </NavbarCollapse>
        </Container>
   </Navbar>
}
