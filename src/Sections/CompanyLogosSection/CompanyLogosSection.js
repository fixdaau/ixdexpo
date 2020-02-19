import React, { Component } from "react";
import "./CompanyLogosSection.scss";
import { Col, Row } from "react-grid-system";
import CompanyLogos from "../../Components/CompanyLogosComponent/companyLogosComponent";
import { getCompanyLogos2020 } from "../../Data/companyLogosData";

const CompanyLogosSection = () => {
  const companyLogos = getCompanyLogos2020();
  return (
    <Col xs={12} style={{ textAlign: "center" }}>
      {companyLogos.map(company => (
        <CompanyLogos
          key={company.imgSrc}
          imgSrc={company.imgSrc}
          url={company.url}
        />
      ))}
    </Col>
  );
};

export default CompanyLogosSection;
