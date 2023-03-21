import { Col, Container, Row, Tab, Nav, Button } from "react-bootstrap";
import Pdf from "../assets/emreozgozcvv.pdf";
export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <Container>
        <h2>RESUME - CV</h2>
        <p>You can check my CV!</p>
        <div className="d-grid">
          <Button  href={Pdf} size="lg">
            RESUME - CV
          </Button>
        </div>
      </Container>
    </section>
  );
};
