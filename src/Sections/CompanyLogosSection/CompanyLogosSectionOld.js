import React, { Component } from "react";
import "./CompanyLogosSection.scss";
import { Col, Row } from "react-grid-system";
import CompanyLogos from "../../Components/CompanyLogosComponent/companyLogosComponent";
import { getCompanyLogos } from "../../Data/companyLogosData";
import H2 from "../../Components/H2/H2";

export default class CompanyLogosSectionOld extends Component {
  companyLogos = getCompanyLogos();

  render() {
    return (
      <Row>
        <Col xs={12} className="header-wrapper">
          <H2>These companies have already signed up</H2>
        </Col>
        <Col xs={12} style={{ textAlign: "center" }}>
          {this.companyLogos.map(company => (
            <CompanyLogos
              key={company.imgSrc}
              imgSrc={company.imgSrc}
              url={company.url}
            />
          ))}
        </Col>
      </Row>
    );
  }
}
