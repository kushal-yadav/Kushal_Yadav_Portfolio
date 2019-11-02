import React from 'react';
import { Card, Container, Row, Col, CardBody, CardTitle, CardText, CardFooter, Button } from 'reactstrap';
import '../css/Projects.css';

export default class TrainingCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: [{}]
    }
  }

  componentWillMount() {
    this.setState({
      courseList:
        [
          {
            cid: 1,
            name: "Hadoop",
            description:
              "Configuration of hdfs, master-slave architecture, map-reduce, apache pig and apache hive",
            link: "https://drive.google.com/open?id=1e1U4ph5Lfv85zRatPuPpaQuDbNq3_wZy"
          },
          {
            cid: 2,
            name: "Android",
            description:
              "Basic course of android and create few projects in android",
            link: "https://drive.google.com/open?id=1wIY9wNrZfuAPO7QihhwsArdvirfNK4Jf"
          },
          {
            cid: 3,
            name: "Java",
            description:
              "Core java concepts and hibernate",
            link: "https://drive.google.com/open?id=1wLD9OSMqjXvydJ6kOx590Ws-g7EJwlFu"
          }
        ]
    });
  }

  render() {
    return (
      <Container id="trainingcourses">
        <h4 id="projects" className="m-0 mt-5">Training and Courses</h4>
        <Row>
          {this.state.courseList.map((course) =>
            <Col md={4} sm={6} key={course.cid} className="mt-4">
              <Card className="shadow-lg p-3 h-100">
                <CardBody className="text-left">
                  <CardTitle className="h5">{course.name}</CardTitle>
                  <CardText>{course.description}</CardText>
                  <Button color="dark" id="myBtn" className="mb-0 rounded-0" block onClick={() => window.open(course.link)}>View</Button>
                </CardBody>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}