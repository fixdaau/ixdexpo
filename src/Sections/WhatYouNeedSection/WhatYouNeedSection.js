import { Col, Hidden, Row } from "react-grid-system";
import "./WhatYouNeedSection.scss";
import { getWhatYouNeed } from "../../Data/infoPieces";
import InfoPieceCard from "../../Components/InfoPiece/InfoPieceCard";
import H2 from "../../Components/H2/H2";
import React, { Component } from "react";
import Slider from "react-slick";

export default class WhatYouNeedSection extends Component {
  settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };

  whatYouNeedData = getWhatYouNeed();
  render() {
    return (
      <Row justify="center">
        <Col xs={12} className="title-wrapper">
          <H2>What you need at your stand</H2>
        </Col>

        <Hidden xs={true} sm={true}>
          {this.whatYouNeedData.map(data => {
            return (
              <Col md={4}>
                <InfoPieceCard
                  iconSrc={data.iconSrc}
                  title={data.title}
                  text={data.text}
                />
              </Col>
            );
          })}
        </Hidden>

        <Hidden md={true} lg={true} xl={true}>
          <Col>
            <Slider {...this.settings}>
              {this.whatYouNeedData.map(data => {
                return (
                  <InfoPieceCard
                    iconSrc={data.iconSrc}
                    title={data.title}
                    text={data.text}
                  />
                );
              })}
            </Slider>
          </Col>
        </Hidden>
      </Row>
    );
  }
}
