import { Col, Container, Row, Tab, Nav, Button } from "react-bootstrap";
import Pdf from "../assets/emreozgozcvv.pdf";
export const Resume = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Tab.Container id="projects-tabs" defaultActiveKey="second">
          <Nav
            variant="pills"
            className="mb-5 justify-content-center align-items-center"
            id="pills-tab"
          >
            <Nav.Item>
              <Nav.Link href={Pdf} eventKey="second">
                Resume - CV
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content></Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};
