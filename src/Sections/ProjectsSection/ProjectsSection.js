import React from "react";
import "./ProjectsSection.scss";
import { Col, Container, Row } from "react-grid-system";
import H2 from "../../Components/H2/H2";
import H3 from "../../Components/H3/H3";

const ProjectsSection = () => {
  return (
    <Row>
      <Col xs={12} className='header-wrapper'>
        <H2>Examples of student projects</H2>
      </Col>

      <Col sm={12} md={4}>
        <img className='img' src={require("../../Images/bellis.jpg")} alt="Bellis project" />
        <H3>Bellis</H3>
        <p>
          Helping plant owners not killing their plants, while providing
          better indoor-climate using plants own self-cleaning capabilities
          </p>
      </Col>

      <Col className="hideProject" sm={12} md={4}>
        <img className='img' src={require("../../Images/bellis.jpg")} alt="Bellis project" />
        <H3>Bellis</H3>
        <p>
          Helping plant owners not killing their plants, while providing
          better indoor-climate using plants own self-cleaning capabilities
          </p>
      </Col>

      <Col className="hideProject" sm={12} md={4}>
        <img className='img'  src={require("../../Images/bellis.jpg")} alt="Bellis project" />
        <H3>Bellis</H3>
        <p>
          Helping plant owners not killing their plants, while providing
          better indoor-climate using plants own self-cleaning capabilities
          </p>
      </Col>
    </Row>
  );
};

export default ProjectsSection;