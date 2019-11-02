import React from 'react';
import linkedin from '../data/linkedin.png';
import github from '../data/github.svg';
import '../css/Contact.css';
import { Navbar, Nav, } from 'react-bootstrap';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="bg-secondary text-white" id="contact">
          <Navbar.Brand href="#">
            
          </Navbar.Brand>
            <Nav className="mr-auto">
            <>CONTACT : (+91)-9768964735 | kushaly1996@gmail.com</>
            </Nav>
            <Nav>
            <a sm={2} href="https://www.linkedin.com/in/kushalyadav" target="_blank"><img class="profile-logo" src={linkedin} alt="linkedin profile" /></a>
            </Nav>
            <Nav>
            <a sm={2} href="https://github.com/kushal-yadav" target="_blank"><img class="profile-logo" src={github} alt="github profile" /></a>
            </Nav>
        </Navbar>
      </>
    );
  }
}