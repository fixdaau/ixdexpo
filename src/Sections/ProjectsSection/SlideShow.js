import { Col, Container, Row } from "react-grid-system";
// import styled from 'styled-components';
import Slider from "react-slick";
import React, { Component } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./ProjectsSection.scss";
import StudentProject from "../../Components/StudentProject/StudentProject";
import { getProjects } from "./Project";

export default class SlideShow extends Component {
  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  projectData = getProjects();

  render() {
    return (
      <div>
        <Slider {...this.settings}>
          {this.projectData.map(project => {
            return (
              <StudentProject
                title={project.heading}
                description={project.text}
                imgSrc={project.img} />
            )
          })}
        </Slider>
      </div>
    );
  }
}
