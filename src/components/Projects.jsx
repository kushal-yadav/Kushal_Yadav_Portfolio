import React from 'react';
import { Card, Container, Row, Col, CardBody, CardTitle, CardText, CardFooter, Button } from 'reactstrap';
import '../css/Projects.css';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [{}]
    }
  }

  componentWillMount() {
    this.setState({
      projectList:
        [
          {
            pid: 1,
            name: "Online Bill Payment System",
            description: "Dot Net MVC, Entity Framework and SQL",
            link: "https://github.com/kushal-yadav/Online_Bill_Payment_System.git"
          },
          {
            pid: 2,
            name: "Online College System",
            description:
              "HTML, CSS, JQuery and Javascript",
            link: "https://github.com/kushal-yadav/Online_College_System.git"
          },
          {
            pid: 3,
            name: "Online Assessment System UI",
            description:
              "React JS",
            link: "https://github.com/kushal-yadav/Online_Assessment_System_UI.git"
          },
          {
            pid: 4,
            name: "Online Assessment System Backend",
            description:
              ".NET Web API, EF and SQL",
            link: "https://github.com/kushal-yadav/Online_Assessment_System.git"
          },
          {
            pid: 5,
            name: "Employee Management System",
            description: "Java",
            link: "https://github.com/kushal-yadav/Employee-Management-System.git"
          },
          {
            pid: 6,
            name: "My Resume Application",
            description: "Android",
            link: "https://github.com/kushal-yadav/My-Resume-Application.git"
          },
          {
            pid: 7,
            name: "Dummy News",
            description: "Android",
            link: "https://github.com/kushal-yadav/Dummy_News.git"
          },
          {
            pid: 8,
            name: "Online Learning Application",
            description: "Android",
            link: "https://github.com/kushal-yadav/Online-Learning-Application.git"
          },
          {
            pid: 9,
            name: "Online Voting Application",
            description: "Android",
            link: "https://github.com/kushal-yadav/Online_Voting_System.git"
          },
          {
            pid: 10,
            name: "Tutorial Point",
            description: "HTML, CSS, PHP and Wamp Server",
            link: "https://github.com/kushal-yadav/Tutorial_Point.git"
          }
        ]
    });
  }

  render() {
    return (
      <Container>
        <h4 id="projects" className="m-0 mt-5">Projects</h4>
        <Row>
          {this.state.projectList.map((project) =>
            <Col md={4} sm={6} key={project.pid} className="mt-4">
              <Card className="shadow-lg p-3 h-100">
                <CardBody className="text-left">
                  <CardTitle className="h5">{project.name}</CardTitle>
                  <CardText>{project.description}</CardText>
                  <Button color="dark" id="myBtn" className="mb-0 rounded-0" block onClick={() => window.open(project.link)}>View Source Code</Button>
                </CardBody>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}