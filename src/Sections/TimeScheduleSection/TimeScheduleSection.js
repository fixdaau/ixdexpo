import React, { Component } from 'react';
import { Row, Col, Hidden } from 'react-grid-system';
import H2 from '../../Components/H2/H2';
import './TimeScheduleSextion.scss';
import Divider from '../../Components/Divider/Divider';

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
                    <div className='small-card'>
                        <div className='card-section' style={{marginTop: '0px'}}>
                            <span className='small-card-text'>Welcome & introduction</span><span className='small-card-time'>13:00</span>
                        </div>
                        <Divider />
                        <div className='card-section'>
                            <span className='small-card-text'>Walkaround between EXPO stands</span><span className='small-card-time'>13:15</span>
                        </div>
                        <Divider />
                        <div className='card-section'>
                            <span className='small-card-text'>Panel discussion & street food</span><span className='small-card-time'>15:00</span>
                        </div>
                        <Divider />
                        <div className='card-section'>
                            <span className='small-card-text'>Networking & cocktails</span><span className='small-card-time'>16:00</span>
                        </div>
                        <Divider />
                        <div className='card-section' style={{marginBottom: '0px'}}>
                            <span className='small-card-text'>Signing off</span><span className='small-card-time'>19:00</span>
                        </div>
                    </div>
                </Col>
            </Row >
        );
    }
}

export default TimeScheduleSection;