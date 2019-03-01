import React, { Component } from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import H2 from '../H2/H2';
import Button from '../Button/Button';
import './PopupModal.scss';

class PopupModal extends Component {
    render() {
        return (
            <div className='modal-wrapper'>
                <Container>
                    <Row className='modal'>
                        <Hidden xs={true} sm={true} md={true}>
                            <Col xs={6}>
                                <img src={require('../../Images/Illustratoin.svg')} alt='' style={{ width: '100%' }} />
                            </Col>
                        </Hidden>

                        <Col xs={12} sm={12} md={6}>
                            <H2 alignment='left'>Looking forward to meet you!</H2>
                            <p className='sub-text'>Thanks for signing up. We are working very hard and we will reach out to you in a near future.</p>
                            <Row style={{ marginTop: '40px' }}>
                                <Col xs={1}><img src={require('../../Images/Icon_Magazine entry.svg')} style={{ marginTop: '4px' }} alt=""/></Col>
                                <Col xs={10} ><div className='bullet-text'>We will contact you in the coming weeks for further attendee information as well as address information for the Expo Magazine </div></Col>
                            </Row>
                            <Row style={{ marginTop: '32px' }}>
                                <Col xs={1}><img src={require('../../Images/Icon_Funds.svg')} style={{ marginTop: '4px' }} alt=""/></Col>
                                <Col xs={10} ><div className='bullet-text'>The invoice will be sent to you after the event has taken place. You will have two weeks to pay.</div></Col>
                            </Row>
                            <div className='redirect-button'>
                                <Button url='/' onClick={() => {
                                    this.props.changeModalVisibility(false);
                                    window.scroll({
                                        top: 0,
                                        left: 0,
                                        behavior: 'smooth'
                                    });
                                }}>
                                    Explore IxD Expo!
                            </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default PopupModal;