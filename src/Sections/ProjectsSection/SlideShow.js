import { Col, Container, Row } from "react-grid-system";
// import styled from 'styled-components';
import Slider from "react-slick";
import React, { Component } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import H3 from "../../Components/H3/H3";
import "./ProjectsSection.scss";

export default class SlideShow extends Component {
  render() {
    var settings = {
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

    return (
      <div>
        <Slider {...settings}>
          <div className="Card">
            <div className="test">
              <img
                className="img"
                src={require("../../Images/bellis.jpg")}
                alt="Bellis project"
              />
              <H3>Bellis</H3>
              <p>
                Helping plant owners not killing their plants, while providing
                better indoor-climate using plants own self-cleaning
                capabilities.
              </p>
            </div>
          </div>

          <div className="Card">
            <div className="test">
              <img
                className="img"
                src={require("../../Images/storyblocks.png")}
                alt="Bellis project"
              />
              <H3>StoryBlocks</H3>
              <p>
                A tangible programming language for teaching primary school
                children Computational Thinking through storytelling.
              </p>
            </div>
          </div>
          <div className="Card">
            <div className="test">
              <img
                className="img"
                src={require("../../Images/eia.jpg")}
                alt="Bellis project"
              />
              <H3>EIA</H3>
              <p>
                An ML-based personal assistant for a Medical Secretary designed
                and developed to augment trivial tasks in a Hospital Ward.
              </p>
            </div>
          </div>




          <div className="Card">
            <div className="test">
              <img
                className="img"
                src={require("../../Images/bellis.jpg")}
                alt="Bellis project"
              />
              <H3>Bellis</H3>
              <p>
                Helping plant owners not killing their plants, while providing
                better indoor-climate using plants own self-cleaning
                capabilities.
              </p>
            </div>
          </div>

          <div className="Card">
            <div className="test">
              <img
                className="img"
                src={require("../../Images/storyblocks.png")}
                alt="Bellis project"
              />
              <H3>StoryBlocks</H3>
              <p>
                A tangible programming language for teaching primary school
                children Computational Thinking through storytelling.
              </p>
            </div>
          </div>
          <div className="Card">
            <div className="test">
              <img
                className="img"
                src={require("../../Images/eia.jpg")}
                alt="Bellis project"
              />
              <H3>EIA</H3>
              <p>
                An ML-based personal assistant for a Medical Secretary designed
                and developed to augment trivial tasks in a Hospital Ward.
              </p>
            </div>
          </div>
        </Slider>
      </div>



    );
  }
}
