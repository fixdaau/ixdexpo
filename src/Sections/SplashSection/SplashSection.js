import React from "react";
import { Col, Row, Container } from "react-grid-system";
import Button from "../../Components/Button/Button";
import H1 from "../../Components/H1/H1";
import "./SplashSection.scss";
import Header from "../../Components/Header/Header";

const SplashSection = () => {
  return (
    <div className="modal-container splash-bg">
      <Header />
      <Container>
        <Row className="splash">
          <Col sm={10} md={10}>
            <H1>Meet the designers of tomorrow</H1>
            <p className="paragraph">
              Join us, and discover what interaction designers can do for your
              company
            </p>
          </Col>
        </Row>

        <Row className="splash splash-button-container">
          <Col sm={6} md={3} className="splash-buttons">
            <Button
              type={"primary"}
              url="https://www.brainsbusiness.dk/dk/arrangementer/brainsbusiness-arrangementer/moed-fremtidens-interaktionsdesignere-paa-ixd-expo---aalborg.htm"
              onClick={() => {}}
            >
              Sign up for free
            </Button>
          </Col>
          <Col sm={6} md={3} className="splash-buttons">
            <Button type={"secondary"} onClick={() => {}}>
              I'm a student
            </Button>
          </Col>
        </Row>
        <Row className="splash-company-container"></Row>
      </Container>
    </div>
  );
};

export default SplashSection;
