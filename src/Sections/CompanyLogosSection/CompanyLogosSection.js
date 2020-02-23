import React, { Component } from 'react';
import './CompanyLogosSection.scss';
import { Col, Row } from 'react-grid-system';
import CompanyLogos from '../../Components/CompanyLogosComponent/companyLogosComponent';
import { getCompanyLogos2020 } from '../../Data/companyLogosData';

const CompanyLogosSection = () => {
  const companyLogos = getCompanyLogos2020();
  let companyIndexArray = [];

  const whichCompanies = () => {
    let companyPossibilites = [];
    for (let i = 0; i < companyLogos.length; ++i) {
      companyPossibilites.push(i);
    }
    companyPossibilites = shuffleArray(companyPossibilites);
    for (let i = 0; i < 4; ++i) {
      let index = Math.floor(Math.random() * companyPossibilites.length);
      companyIndexArray.push(companyPossibilites[index]);
      companyPossibilites.splice(index, 1);
    }

    return companyIndexArray;
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  whichCompanies();

  return (
    <Col xs={12} md={12} style={{}}>
      <div className='logo-row'>
        {companyIndexArray.map(i => (
          <CompanyLogos
            key={companyLogos[i].imgSrc}
            imgSrc={companyLogos[i].imgSrc}
            url={companyLogos[i].url}
          />
        ))}
        <div>
          <p className='splash-company-paragraph'>And {16} more!</p>
        </div>
      </div>
    </Col>
  );
};

export default CompanyLogosSection;
