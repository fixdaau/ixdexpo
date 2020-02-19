import React from 'react';
import { Row, Col, Visible } from 'react-grid-system';
import './InteractinoDesginSection.scss'
import H2 from'../../Components/H2/H2';
import H3 from'../../Components/H3/H3';
import FeatherIcons from 'feather-icons-react';

const InteractionDesignSection = () => {
    const feather = require('feather-icons')
    return (
        <div className="ixdbg">
            <container fluid>
            <Row>
                <Col xs={12} align='center'>
                    <H2>What is IxD EXPO?</H2>
                </Col>
            </Row>

            <Row justify='center'>
                <Col xs={12} md={8} lg={6}>
                    <p>
                    IxD EXPO is an event where we as Interaction Design students, want to show what we can contribute with at your company. 
                    We will impress you with prototypes, demos and presenting our bachelor and master projects.
                    </p>
                </Col>
            </Row>

            <Row justify='around'>
                <Col xm={3} md={4} lg={3} align='center'>
                    <H3>61</H3>
                    <p>
                        Students will be eager to meet you.
                    </p>
                </Col>

                <Col xm={6} md={4} lg={3} align='center'>
                    <H3>18</H3>
                    <p>
                        Companies will be attending.
                    </p>
                </Col>

                <Col xm={6} md={4} lg={3} align='center'>
                    <H3>22</H3>
                    <p>
                        Projects await your intrest.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={12} align='center'>
                    <H3>When & Where</H3>
                </Col>
            </Row>

            <Row justify='center'>
                <Col xs={12} md={4} lg={4} align='center'>
                    <FeatherIcons icon = 'calendar' size='40' color='white'/>
                    <p>March 20, 2020<br/>13:00-19:00</p>
                </Col>
                <Col xs={12} md={4} lg={4} align='center'>
                    <FeatherIcons icon = 'map-pin' size='40' color='white'/>
                    <p>Selma Lagerløfs Vej 300,<br/>9000 Aalborg</p>
                </Col>
            </Row>
            </container>
        </div>
    );
};

export default InteractionDesignSection;