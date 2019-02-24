import React from "react";
import "./ProjectsSection.scss";
import { Col, Container, Row } from "react-grid-system";
import H2 from "../../Components/H2/H2";
import H3 from "../../Components/H3/H3";

const ProjectsSection = () => {
  return (
    <Container className="projects">
      <Container className="h2">
        <H2>Examples of student projects</H2>
      </Container>

      <Row>
        <Col sm={12} md={4}>
          <img src={require("../../Images/bellis.jpg")} alt="Bellis project" />
          <H3>Bellis</H3>
          <p>
            Helping plant owners not killing their plants, while providing
            better indoor-climate using plants own self-cleaning capabilities
          </p>
        </Col>

        <Col className="hideProject" sm={12} md={4}>
          <img src={require("../../Images/bellis.jpg")} alt="Bellis project" />
          <H3>Bellis</H3>
          <p>
            Helping plant owners not killing their plants, while providing
            better indoor-climate using plants own self-cleaning capabilities
          </p>
        </Col>

        <Col className="hideProject" sm={12} md={4}>
          <img src={require("../../Images/bellis.jpg")} alt="Bellis project" />
          <H3>Bellis</H3>
          <p>
            Helping plant owners not killing their plants, while providing
            better indoor-climate using plants own self-cleaning capabilities
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsSection;