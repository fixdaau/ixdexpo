import React, {Component} from "react";
import "./CompanyLogosSection.scss";
import { Col, Container, Row } from "react-grid-system";
import CompanyLogos from "../../Components/CompanyLogosComponent/companyLogosComponent";
import { getCompanyLogos } from "../../Data/companyLogosData";
import H2 from '../../Components/H2/H2';

export default class CompanyLogosSection extends Component {

    projectData = getCompanyLogos();
    render() {
        return (
                <Row>
                    <Col xs={12} className="header-wrapper">
                        <H2>These companies have already signed up</H2>
                    </Col>
                    
                         {this.projectData.map(project => {
                            return ( 
                                <Col xs={2} className="img">
                                    <CompanyLogos imgSrc={project.imgSrc}/>
                                </Col>
                         )})}
          
                </Row>
          );
    }
}