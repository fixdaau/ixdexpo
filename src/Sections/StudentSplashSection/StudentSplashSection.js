import React from "react";
import { Col, Row, Container } from "react-grid-system";
import Button from "../../Components/Button/Button";
import H1 from "../../Components/H1/H1";
import "./StudentSplashSection.scss";
import Header from "../../Components/Header/Header";

const StudentSplashSection = () => {
  return (
    <div className="modal-container student-splash-bg">
      <Header />
      <Container>
        <Row className="splash">
          <Col sm={10} md={10}>
            <H1>Showcase your projects to industry leaders</H1>
            <p className="paragraph">
              IxD EXPO is your opportunity to get a head start on your career
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
              Sign up for a stand
            </Button>
          </Col>
        </Row>
        <Row className="splash-company-container">
          <Col xs={12} md={12}>
            <p className="splash-company-paragraph">
              Prepare to meet these companies and many more
            </p>
          </Col>
          <Col xs={12} md={12}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentSplashSection;
