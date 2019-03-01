import React from 'react';
import { Row, Col, Visible } from 'react-grid-system';
import Card from '../../Components/Card/Card';

const InteractionDesignSection = () => {
    return (
        <Row>
            <Col xs={12} sm={12} md={6}>
                <Visible md={true} lg={true} xl={true}>
                    <Card
                        front={<img src={require('../../Images/What is interaciton design_Front.svg')} style={{ width: '100%' }} alt="" />}
                        back={<img src={require('../../Images/What is interaction design_Back.svg')} style={{ width: '100%' }} alt="" />}
                    />
                </Visible>
                <Visible xs={true} sm={true}>
                    <img src={require('../../Images/What is interaction design_Back.svg')} style={{ width: '100%' }} alt="" />
                </Visible>
            </Col>

            <Col xs={12} sm={12} md={6}>
                <Visible md={true} lg={true} xl={true}>
                    <Card
                        front={<img src={require('../../Images/How does interaction design fit your business_Fron.svg')} style={{ width: '100%' }} alt="" />}
                        back={<img src={require('../../Images/How does interaction design fit your business_Back.svg')} style={{ width: '100%' }} alt="" />}
                    />
                </Visible>
                {/* <Visible xs={true} sm={true}>
                    <img src={require('../../Images/How does interaction design fit your business_Back.svg')} style={{ width: '100%', marginTop: '40px' }} />
                </Visible> */}
            </Col>
        </Row>
    );
};

export default InteractionDesignSection;