import React from 'react';
import { Row, Col, Visible } from 'react-grid-system';
import './InteractinoDesginSection.scss'
import H1 from'../../Components/H1/H1'
import H3 from'../../Components/H3/H3'
import Card from '../../Components/Card/Card';

const InteractionDesignSection = () => {
    return (
        <div className="ixdbg">
            <Row>
                <Col xs={12} debug align='center'>
                    <H1>What is IxD EXPO?</H1>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <p>
                    IxD EXPO is an event where we as Interaction Design students, want to show what we can contribute with at your company. 
                    We will impress you with prototypes, demos and presenting our bachelor and master projects.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xm={6} md={4}>
                    <H3>
                        Indsæt nummer her 1
                    </H3>
                    <p>
                        Students will be eager to meet you.
                    </p>
                </Col>

                <Col xm={6} md={4} debug>
                    <H3>Indsæt nummer her 2</H3>
                    <p>
                        Companies will be attending.
                    </p>
                </Col>

                <Col xm={6} md={4}>
                    <H3>Indsæt Nummer her 3</H3>
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

            <Row>
                <Col xs={6}>
                    <p>March 20, 2020</p><br/> <p> 13:00-19:00</p>
                </Col>
                <Col xs={6}>
                    <p>Selma Lagerløfs Vej 300,</p><br/><p>9000 Aalborg</p>
                </Col>
            </Row>
        </div>
        // <Row>
        //     <Col xs={12} sm={12} md={6}>
        //         <Visible md={true} lg={true} xl={true}>
        //             <Card
        //                 front={<img src={require('../../Images/What is interaciton design_Front.svg')} style={{ width: '100%' }} alt="" />}
        //                 back={<img src={require('../../Images/What is interaction design_Back.svg')} style={{ width: '100%' }} alt="" />}
        //             />
        //         </Visible>
        //         <Visible xs={true} sm={true}>
        //             <img src={require('../../Images/What is interaction design_Back.svg')} style={{ width: '100%' }} alt="" />
        //         </Visible>
        //     </Col>

        //     <Col xs={12} sm={12} md={6}>
        //         <Visible md={true} lg={true} xl={true}>
        //             <Card
        //                 front={<img src={require('../../Images/How does interaction design fit your business_Fron.svg')} style={{ width: '100%' }} alt="" />}
        //                 back={<img src={require('../../Images/How does interaction design fit your business_Back.svg')} style={{ width: '100%' }} alt="" />}
        //             />
        //         </Visible>
        //         {/* <Visible xs={true} sm={true}>
        //             <img src={require('../../Images/How does interaction design fit your business_Back.svg')} style={{ width: '100%', marginTop: '40px' }} />
        //         </Visible> */}
        //     </Col>
        // </Row>
    );
};

export default InteractionDesignSection;