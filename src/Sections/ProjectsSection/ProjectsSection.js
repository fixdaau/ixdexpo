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
          better indoor-climate using plants own self-cleaning capabilities.
        </p>
      </Col>

      <Col className="hideProject" sm={12} md={4}>
        <img className='img' src={require("../../Images/storyblocks.png")} alt="Bellis project" />
        <H3>StoryBlocks</H3>
        <p>
          A tangible programming language for teaching primary school children Computational Thinking through storytelling.
          </p>
      </Col>

      <Col className="hideProject" sm={12} md={4}>
        <img className='img' src={require("../../Images/eia.jpg")} alt="Bellis project" />
        <H3>EIA</H3>
        <p>
          An ML-based personal assistant for a Medical Secretary designed and developed to augment trivial tasks in a Hospital Ward.
          </p>
      </Col>
    </Row>
  );
};

export default ProjectsSection;