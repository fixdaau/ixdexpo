import React, { Component } from 'react';
import { Row, Col, Hidden } from 'react-grid-system';
import H2 from '../../Components/H2/H2';
import './TimeScheduleSextion.scss';

class TimeScheduleSection extends Component {
    render() {
        return (
            <Row>
                <Hidden xs={true} sm={true}>
                    <Col md={6}>
                        <img src={require('../../Images/Illustration_Printout.svg')} style={{ width: '100%' }} alt='' />
                    </Col>
                </Hidden>
                <Col xs={12} sm={12} md={6} >
                    <H2 alignment='left'>How it’s going down</H2>
                    <SmallCard text='Welcome & introduction' time='15:00' />
                    <SmallCard text='Walkaround between EXPO stands' time='15:15' />
                    <SmallCard text='Panel discussion & street food' time='17:30' />
                    <SmallCard text='Networking & cocktails' time='18:30' />
                    <SmallCard text='Signing off' time='20:00' />
                </Col>
            </Row>
        );
    }
}

const SmallCard = ({ text, time }) => {
    return (
        <div className='small-card'>
             <span className='small-card-text'>{text}</span>
            <span className='small-card-time'>{time}</span>
        </div>
    )
}

export default TimeScheduleSection;