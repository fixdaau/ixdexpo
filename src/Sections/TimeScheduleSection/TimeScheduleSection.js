import React, { Component } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import H2 from '../../Components/H2/H2';
import './TimeScheduleSection.scss';
import Divider from '../../Components/Divider/Divider';
import { getTimeScheduleData } from '../../Data/timeScheduleData';

class TimeScheduleSection extends Component {
  render() {
    return (
      <Container className='time-schedule-container' id='event-schedule'>
        {getTimeScheduleData().map((tsd, i) => (
          <Fragment key={i + 4321}>
            <Hidden key={i + 1234} lg={true} xl={true}>
              <SinglePointMobile
                timeSpan={tsd.timeSpan}
                title={tsd.title}
                description={tsd.description}
                imgSrc={tsd.imgSrc}
              />
            </Hidden>
            <Hidden key={i} xs={true} sm={true} md={true}>
              <SinglePoint
                alternate={i % 2 === 0}
                timeSpan={tsd.timeSpan}
                title={tsd.title}
                description={tsd.description}
                imgSrc={tsd.imgSrc}
              />
            </Hidden>
          </Fragment>
        ))}
      </Container>
    );
  }
}

const SinglePoint = ({ timeSpan, title, description, imgSrc, alternate }) =>
  alternate ? (
    <Row key={title} className='time-row'>
      <Col md={6}>
        <div className='time-span'>{timeSpan}</div>
        <div className='time-title'>{title}</div>
        <div className='time-description'>{description}</div>
      </Col>
      <Col md={1}></Col>
      <Col md={5}>
        <img
          className='time-image'
          src={imgSrc}
          style={{ width: '100%' }}
          alt=''
        />
      </Col>
    </Row>
  ) : (
    <Row key={title} className='time-row'>
      <Col md={5}>
        <img
          className='time-image'
          src={imgSrc}
          style={{ width: '100%' }}
          alt=''
        />
      </Col>
      <Col md={1}></Col>
      <Col md={6}>
        <div className='time-span'>{timeSpan}</div>
        <div className='time-title'>{title}</div>
        <div className='time-description'>{description}</div>
      </Col>
    </Row>
  );

const SinglePointMobile = ({ timeSpan, title, description, imgSrc }) => (
  <Row key={title} className='time-row-mobile'>
    <Col xs={12}>
      <div className='time-span-mobile'>{timeSpan}</div>
      <div className='time-title'>{title}</div>
      <div className='time-description'>{description}</div>
    </Col>
    <Col xs={12}>
      <img
        className='time-image-mobile'
        src={imgSrc}
        style={{ width: '100%' }}
        alt=''
      />
    </Col>
  </Row>
);

export default TimeScheduleSection;
