import React from 'react';
import { Col, Row, Container } from 'react-grid-system';
import Button from '../../Components/Button/Button';
import H1 from '../../Components/H1/H1';
import './SplashSection.scss';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import CompanyLogosSection from '../CompanyLogosSection/CompanyLogosSection';

const SplashSection = () => {
  return (
    <div className='modal-container splash-bg'>
      <Header />
      <Container>
        <Row className='splash'>
          <Col sm={10} md={10}>
            <H1>Meet the designers of tomorrow</H1>
            <p className='paragraph'>
              Join us, and discover what interaction designers can do for your
              company
            </p>
          </Col>
        </Row>

        <Row className='splash splash-button-container'>
          <Col sm={6} md={3} className='splash-buttons'>
            <Button
              type={'primary'}
              url='https://www.brainsbusiness.dk/dk/arrangementer/brainsbusiness-arrangementer/moed-fremtidens-interaktionsdesignere-paa-ixd-expo---aalborg.htm'
              onClick={() => {}}
            >
              Sign up for free
            </Button>
          </Col>
          <Col sm={6} md={3} className='splash-buttons'>
            <Button type='secondary' onClick={() => {}} url={'/student'}>
              I'm a student
            </Button>
          </Col>
        </Row>
        <Row className='splash-company-container'>
          <Col xs={12} md={12}>
            <p className='splash-company-paragraph'>
              Prepare to meet these companies and many more
            </p>
          </Col>
          {/* <CompanyLogosSection /> */}

          {/* <Col xs={12} md={12}>
            <p className="splash-company-paragraph">
              You will be in good company
            </p>
          </Col>
          <Col xs={12} md={12}></Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default SplashSection;
