import { Col, Hidden, Row } from "react-grid-system";
import "./WeGotYourBackSection.scss";
import { getWeGotYou } from "../../Data/infoPieces";
import InfoPieceCard from "../../Components/InfoPiece/InfoPieceCard";
import H2 from "../../Components/H2/H2";
import React, { Component } from "react";
import Slider from "react-slick";

export default class WeGotYourBackSection extends Component {
  settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };

  weGotYouData = getWeGotYou();
  render() {
    return (
      <Row justify="center">
        <Col xs={12} className="title-wrapper">
          <H2>We’ve got your back</H2>
          <p>We know that It can be overwhelming, but are here to help!</p>
          <p>
            Below is listed all the ways we hope to make IXD EXPO the best
            experience for you.
          </p>
        </Col>

        <Hidden xs={true} sm={true}>
          {this.weGotYouData.map(data => {
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
              {this.weGotYouData.map(data => {
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
