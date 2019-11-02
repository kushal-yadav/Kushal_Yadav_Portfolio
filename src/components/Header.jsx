import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, } from 'react-bootstrap';
import image from '../data/kushalyadav.png';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="bg-secondary">
          <Navbar.Brand href="#">
            About
            {/* <img
              style={{ width: "3rem", height: "3rem" }}
              class="img-fluid rounded-circle"
              src={image}
            /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="text-left">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#trainingcourses">Training</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="https://drive.google.com/open?id=182ykAQKzXVsj-I1Y-284GKPXKRT9_S4c" target="_blank">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}