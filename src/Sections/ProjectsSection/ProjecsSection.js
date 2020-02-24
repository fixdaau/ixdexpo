import { Col, Row, Container, Hidden } from "react-grid-system";
import Slider from "react-slick";
import React, { Component } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./ProjectsSection.scss";
import StudentProject from "../../Components/StudentProject/StudentProject";
import { getProjects } from "../../Data/studentProjects";
import H2 from "../../Components/H2/H2";

export default class ProjecsSection extends Component {
  state = {
    currentSlide: 0
  };

  settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    useCSS: true,
    nextArrow: (
      <div
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
      />
    ),
    afterChange: current => this.setState({ currentSlide: current }),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true
        }
      }
    ]
  };

  projectData = this.shuffle(getProjects());

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  prev = () => this.slider.slickPrev();

  next = () => this.slider.slickNext();

  render() {
    const { currentSlide } = this.state;

    let leftArrowClass = "arrow-btn arrow-btn--left";
    let rightArrowClass = "arrow-btn arrow-btn--right";
    let leftArrowPath = "./assets/images/arrow.svg";
    let rightArrowPath = "./assets/images/arrow.svg";

    if (currentSlide === 0) {
      leftArrowClass += " arrow-btn--disabled";
      leftArrowPath = "/assets/images/arrow-disabled.svg";
    }

    if (currentSlide + 3 === this.projectData.length) {
      rightArrowClass += " arrow-btn--disabled--right";
      rightArrowPath = "/assets/images/arrow-disabled.svg";
    }

    return (
      <div className="project-section-container">
        <Container>
          <Row>
            <Col xs={12} className="header-wrapper">
              <div className="teasing-panel">{this.props.teaser}</div>
              <div className="project-section-heading">
                Interaction design projects
                <Hidden xs={true} md={true}>
                  <span className="button-container">
                    <button onClick={this.prev} className={leftArrowClass}>
                      <img alt="" src={leftArrowPath} />
                    </button>
                    <button onClick={this.next} className={rightArrowClass}>
                      <img alt="" src={rightArrowPath} />
                    </button>
                  </span>
                </Hidden>
              </div>
            </Col>

            <Col xs={12} className="slider-sec">
              <Slider {...this.settings} ref={c => (this.slider = c)}>
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
        </Container>
      </div>
    );
  }
}
