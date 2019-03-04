import React from 'react';
import { Container, Row, Col, Visible } from 'react-grid-system';
import MapBox from '../../Components/MapBox/MapBox';
import './Footer.scss';

const Footer = () => {
    return (
        <Container className='footer' fluid={true} >
            <Container>
                <Row >
                    <Col xs={12} md={7}>
                        <div className='large-text'>WHEN?</div>
                        <div className='description-text'>
                            <img src={require('../../Images/Icons_Calendar_White.svg')} alt=""/>
                            April 3rd, 2019 <img style={{ marginLeft: '32px' }} src={require('../../Images/Icons_Time_White.svg')} alt=""/>15:00 - 20:00
                            </div>
                        <div className='large-text'>WHERE?</div>
                        <div className='description-text'>
                            <img className='footer-icon' src={require('../../Images/Icons_Location_White.svg')} />
                            Selma Lagerløfs Vej 300, 9000 Aalborg
                        </div>
                        <div className='large-text'>CONTACT</div>
                        <div className='description-text' style={{ fontSize: '20px' }}>expo@ixd-expo.aau.dk</div>
                        <div className='description-text' style={{ marginTop: '80px', marginBottom: '0px', fontSize: '20px' }}>FixD © 2019</div>
                    </Col>
                    <Visible xs={false} sm={false} md={false} lg={true} xl={true}>
                        <Col xs={12} md={5}>
                            <MapBox />
                        </Col>
                    </Visible>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;