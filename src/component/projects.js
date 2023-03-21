import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects1 = [
    {
      title: "Description",
      description: "An online reservation system for restaurants, cinemas etc",
      imgUrl: projImg1,
    },
    {
      title: "Backend",
      description: "Nest.js, Apache Kafka, TypeORM, PostgreSQL",
      imgUrl: projImg2,
    },
    {
      title: "Frontend",
      description: "React.js, Next.js, Redux",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      title: "Description",
      description:
        "The aim of the project is to develop a chatbot to automatically respond to queries of users within the university",
      imgUrl: projImg1,
    },
    {
      title: "Backend",
      description: "Python, Tensorflow, NLP, TurkishStemmer, Django",
      imgUrl: projImg2,
    },
    {
      title: "Frontend",
      description: "React.js",
      imgUrl: projImg3,
    },
  ];
  const projects3 = [
    {
      title: "Description",
      description:
        "A program that creates personalized workout programs by inputting athletes data.",
      imgUrl: projImg1,
    },
    {
      title: "Backend",
      description: "C#, Linq, DBFirst, SQL Server, Entity Framework",
      imgUrl: projImg2,
    },
    {
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>You can check my projects</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((projects, index) => {
                      return <ProjectCard key={index} {...projects} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((projects, index) => {
                      return <ProjectCard key={index} {...projects} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((projects, index) => {
                      return <ProjectCard key={index} {...projects} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
