import React from "react";
import { Col, Row, Container, Visible, Hidden } from "react-grid-system";
import Button from "../../Components/Button/Button";
import H1 from "../../Components/H1/H1";
import "./CompanyFooterSection.scss";
import Header from "../../Components/Header/Header";
import DateBox from "../../Components/DateBox/DateBox";

const SplashSection = () => {
  return (
    <div className="footer-splash-bg">
      <Container>
        <Row style={{paddingTop: '240px'}}>
          <Col xs={12} sm={12} md={9}>
            <Row>
              <Col xs={12} sm={12} md={9}>
                <H1>How do I sign up?</H1>
                <div className="paragraph">
                  Our partner, Brains Business, takes care of the registrations.
                  So head on over to their site and save your spot today.
                </div>
              </Col>
            </Row>

            <Row className="splash splash-button-container">
              <Col sm={12} md={5} className="splash-buttons">
                <Button
                  type={"primary"}
                  url="https://www.brainsbusiness.dk/dk/arrangementer/brainsbusiness-arrangementer/moed-fremtidens-interaktionsdesignere-paa-ixd-expo---aalborg.htm"
                  onClick={() => {}}
                >
                  Go to Brains Business to sign up
                </Button>
              </Col>
            </Row>
          </Col>
          <Col sm={0} md={3}>
            <Visible md lg xl>
              <DateBox />
            </Visible>
          </Col>
        </Row>
        <Row className="splash-company-container" style={{marginTop: '200px', marginBottom: '80px'}}>
          <Col xs={12} md={12}>
            <p className="splash-company-paragraph">FixD © 2020</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SplashSection;
