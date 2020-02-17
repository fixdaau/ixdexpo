import { Col, Row } from 'react-grid-system';
import Slider from 'react-slick';
import React, { Component } from 'react';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './ProjectsSection.scss';
import StudentProject from '../../Components/StudentProject/StudentProject';
import { getProjects } from '../../Data/studentProjects';
import H2 from '../../Components/H2/H2';

export default class ProjecsSection extends Component {
  settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  projectData = this.shuffle(getProjects());

  shuffle (a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  

  render() {
    return (
      <Row>
        <Col xs={12} className="header-wrapper">
          <H2>Examples of student projects</H2>
        </Col>

        <Col xs={12} className="slider-sec">
          <Slider {...this.settings}>
            {this.projectData.map(project => {
              return (
                <StudentProject
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imgSrc={project.imgSrc}
                />
              );
            })}
          </Slider>
        </Col>
      </Row>
    );
  }
}
