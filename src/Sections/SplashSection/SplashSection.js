import React from 'react';
import { Col, Row } from 'react-grid-system';
import Button from '../../Components/Button/Button';
import H1 from '../../Components/H1/H1';
import './SplashSection.scss';

const SplashSection = () => {
  return (
    <Row className="splash">
      <Col sm={12} md={7}>
        <H1>Meet the next generation of designers</H1>
        <p className="paragraph">
          Experience state-of-the-art in digital and physical possibilities of
          Interaction Design through master and bachelor projects presented by
          students.
        </p>
        <div className="information">
          <div>
            <img
              className="icon"
              src={require('../../Images/Icons_Calendar.svg')}
              alt="Calendar"
            />
            <p>March 20, 2020</p>
          </div>
          <div>
            <img
              className="icon"
              src={require('../../Images/Icons_Time.svg')}
              alt="Time"
            />
            <p>13:00 - 19:00</p>
          </div>
          <div>
            <img
              className="icon"
              src={require('../../Images/Icons_Location.svg')}
              alt="Location"
            />
            <p>Selma Lagerløfs Vej 300</p>
          </div>
        </div>
        <div>
          <Button url="https://www.brainsbusiness.dk/dk/arrangementer/brainsbusiness-arrangementer/moed-fremtidens-interaktionsdesignere-paa-ixd-expo---aalborg.htm" onClick={() => {}}>
            Sign up for EXPO!
          </Button>
        </div>
      </Col>
      <Col sm={12} md={5}>
        <img
          id="splashImg"
          src={require('../../Images/Illustration-Topsection.svg')}
          alt=""
        />
      </Col>
    </Row>
  );
};

export default SplashSection;
