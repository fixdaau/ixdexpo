import React from "react";
import { Col, Row } from "react-grid-system";
import Button from "../../Components/Button/Button";
import H1 from "../../Components/H1/H1";
import "./SplashSection.scss";

const SplashSection = () => {
  return (
    <Row className="splash">
      <Col sm={12} md={7}>
        <H1>Meet the next generation of designers</H1>
        <p>
          Experience state-of-the-art in digital and physical possibilities of
          Interaction Design through master and bachelor projects presented by
          students.
        </p>
        <div className="container">
          <div>
            <img
              src={require("../../Images/Icons_Calendar.svg")}
              alt="Calendar"
            />
            <p>April 3, 2019</p>
          </div>
          <div>
            <img src={require("../../Images/Icons_Time.svg")} alt="Time" />
            <p>15:00 - 20:00</p>
          </div>
          <div>
            <img
              src={require("../../Images/Icons_Location.svg")}
              alt="Location"
            />
            <p>Selma lagerlöfs vej 300</p>
          </div>
        </div>
        <div className="Button">
          <Button url="#">Sign up for an invitation</Button>
        </div>
      </Col>
      <Col sm={12} md={5}>
        <img id="splashImg" src={require("../../Images/Illustration.svg")} />
      </Col>
    </Row>
  );
};

export default SplashSection;
