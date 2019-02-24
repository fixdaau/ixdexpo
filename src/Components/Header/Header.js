import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <div style={{ height: '184px' }}>
                        <img src={require('../../Images/Logo.svg')} alt='Logo' height='56' width='240' style={{ marginTop: '64px' }} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;