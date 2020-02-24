import React from 'react';
import { Col, Row, Container, Visible } from 'react-grid-system';
import Button from '../../Components/Button/Button';
import H1 from '../../Components/H1/H1';
import './StudentSplashSection.scss';
import Header from '../../Components/Header/Header';
import DateBox from '../../Components/DateBox/DateBox';
import CompanyLogosSection from '../CompanyLogosSection/CompanyLogosSection';

const StudentSplashSection = () => {
  const dots = require('../../Images/Dots.svg')

  return (
    <div className='modal-container student-splash-bg'>
      <img className='dot-bg' src={dots} />
      <Header />
      <Container>
        <Row>
          <Col>
            <Row>
              <Col sm={10} md={10}>
                <H1>Showcase your projects to industry leaders</H1>
                <p className='paragraph'>
                  IxD EXPO is your opportunity to get a head start on your
                  career
                </p>
              </Col>
            </Row>

            <Row className='splash splash-button-container'>
              <Col sm={6} md={3} className='splash-buttons'>
                <Button
                  type={'primary'}
                  url='/student#student-signup-section'
                  onClick={() => {}}
                >
                  Sign up for a stand
                </Button>
              </Col>
            </Row>
          </Col>
          <Col sm={0} md={3}>
            <Visible md lg xl>
              <DateBox />
            </Visible>
          </Col>
        </Row>

        <Row className='splash-company-container'>
          <Col xs={12} md={12}>
            <p className='splash-company-paragraph'>
              Prepare to meet these companies and many more
            </p>
          </Col>
          <CompanyLogosSection />
        </Row>
      </Container>
    </div>
  );
};

export default StudentSplashSection;
