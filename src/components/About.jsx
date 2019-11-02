import React from 'react';
import { Row, Col } from 'react-bootstrap';
import image from '../data/kushalyadav.png';

export default class About extends React.Component {
  render() {
    return (
      <div className="p-3 mb-2 bg-dark text-white">
        <Row >
          <Col md={4} className="p-3" style={{ height: "250px" }}>
            <img
              // className="h-100 p-1 bg-light" style={{ width: "160px" }}
              className="img-fluid rounded-circle w-30 h-18 p-3"
              style={{ width: "15rem", height: "15rem" }}
              src={image}
            />
          </Col>
          <Col md={8} className="p-3">
            <h1>Kushal Yadav</h1>
            <h3>Full Stack Web Developer</h3>
            <p class="mt-4">
              Experienced Full Stack Developer with a demonstrated history of
              working in Information Technology industry. Skilled in
              React, Javascript, C# and SQL Server. Strong Information
              Technology professional with a Bachelor of Engineering (B.E)
              focused in Computer Science Engineering from University of Mumbai.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}