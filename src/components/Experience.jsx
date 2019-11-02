import React from 'react';
import { Card, Container, Row, Col, CardBody, CardText } from 'reactstrap';

export default class Experience extends React.Component {
  render() {
    return (
      <Container id="experience">
        <h4>Experience</h4>
        <Row>
          <Col shadow>
            <Card className="shadow-lg p-3" >
              <CardBody>
                <CardText className="text-left">
                  <span className="h5">
                    Cybage Software Pvt Ltd, Pune, India
                  </span>
                  <span class="h6" style={{ float: "right" }}>
                    Jul 2018 – Present
                  </span>
                  <i><h6>Full Stack Developer</h6></i>
                  <ul>
                    <li>Worked on React JS to develop application.</li>
                    <li>Developed responsive web applications with bootstrap.</li>
                    <li>Designed and developed reusable components to use across the application.</li>
                    <li>Created REST API’s to handle requests from web application.</li>
                    <li>Created .NET application using MVC and Web API.</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}