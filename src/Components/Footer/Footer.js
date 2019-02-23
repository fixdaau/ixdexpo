import React from 'react';
import './Footer.scss';
import HR from '../HR/HR';
import { Row, Col, Container } from 'react-grid-system';

const Footer = () => {
    return (
        <Container>
            <HR></HR>
            <Row>
                <Col xs={7}>
                    <p>FixD © 2019</p>
                </Col>
                <Col xs={2}>
                    <p>Expo team</p>
                </Col>
                <Col xs={3}>
                    <p>ixd-expo@fixd.aau.dk</p>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer;


