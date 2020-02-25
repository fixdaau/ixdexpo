import React from "react";
import { Row, Col, Container, Hidden, Visible } from "react-grid-system";
import "./InteractinoDesginSection.scss";
import H2 from "../../Components/H2/H2";
import H3 from "../../Components/H3/H3";
import FeatherIcons from "feather-icons-react";

const InteractionDesignSection = () => {
  const feather = require("feather-icons");
  return (
    <div className="ixdbg" id="interaction-design-section">
      <Container>
        <Row>
          <Col xs={12} align="center">
            <H2>What is IxD EXPO?</H2>
          </Col>
        </Row>

        <Row justify="center">
          <Col xs={12} md={10} lg={8}>
            <div className="ixd-description" style={{ marginBottom: "48px" }}>
              IxD EXPO is an event where we as Interaction Design students, want
              to show what we can contribute with at your company. We will
              impress you with prototypes, demos and presenting our bachelor and
              master projects.
            </div>
          </Col>
        </Row>
        {/* 
        <Row justify='around'>
          <Col xs={12} md={4} align='center'>
            <H3>61</H3>
            <div className='ixd-description-small'>
              Students will be eager to meet you.
            </div>
          </Col>
          <Col xs={12} md={4} align='center'>
            <H3>18</H3>
            <div className='ixd-description-small'>
              Companies will be attending.
            </div>
          </Col>
          <Col xs={12} md={4} align='center'>
            <H3>22</H3>
            <div className='ixd-description-small'>
              Projects await your interest.
            </div>
          </Col>
        </Row> */}

        <Row style={{ marginBottom: "48px" }}>
          <Col xs={12} align="center">
            <H3>When & Where</H3>
          </Col>
        </Row>

        <Row justify="center">
          <Col xs={12} md={4} lg={4} align="center">
            <FeatherIcons icon="calendar" size="40" color="white" />
            <div className="ixd-description-small">
              March 20, 2020
              <br />
              13:00-19:00
            </div>
          </Col>
          <Visible xs md>
            <Col xs={12}>
              <div style={{ height: "24px" }} />
            </Col>
          </Visible>
          <Col xs={12} md={4} lg={4} align="center">
            <FeatherIcons icon="map-pin" size="40" color="white" />
            <div className="ixd-description-small">
              Selma Lagerløfs Vej 300,
              <br />
              9220 Aalborg Ø
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InteractionDesignSection;
