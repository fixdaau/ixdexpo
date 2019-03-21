import React from "react";
import { Col, Row } from "react-grid-system";
import Button from "../../Components/Button/Button";
import H1 from "../../Components/H1/H1";
import "./StudentSplashSection.scss";

const StudentSplashSection = () => {
  return (
    <Row className="splash">
      <Col sm={12} md={7}>
        <H1>Showcase your projects to industry leaders</H1>
        <p className="paragraph">
          We have invited the best in the business, we just need you to showcase
          your projects. IXD EXPO is your opportunity to get a head start on
          your career.
        </p>
        <div className="information">
          <div>
            <img
              className="icon"
              src={require("../../Images/Icons_Calendar.svg")}
              alt="Calendar"
            />
            <p>April 3, 2019</p>
          </div>
          <div>
            <img
              className="icon"
              src={require("../../Images/Icons_Time.svg")}
              alt="Time"
            />
            <p>15:00 - 20:00</p>
          </div>
          <div>
            <img
              className="icon"
              src={require("../../Images/Icons_Location.svg")}
              alt="Location"
            />
            <p>Selma Lagerløfs Vej 300</p>
          </div>
        </div>
        <div className='sign-up-stand'>
          <Button url="/student#student-signup-section" onClick={() => {}}>
            Sign up for a stand
          </Button>
        </div>
      </Col>
      <Col sm={12} md={5}>
        <img
          id="splashImg"
          src={require("../../Images/Illustration-Topsection.svg")}
          alt=""
        />
      </Col>
    </Row>
  );
};

export default StudentSplashSection;
