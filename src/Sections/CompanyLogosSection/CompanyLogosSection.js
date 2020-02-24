import React, { Component, useState, useEffect } from 'react';
import './CompanyLogosSection.scss';
import { Col, Row } from 'react-grid-system';
import CompanyLogos from '../../Components/CompanyLogosComponent/companyLogosComponent';
import { getCompanyLogos2020 } from '../../Data/companyLogosData';
import { firebase } from '../../Utils/Firebase';

const CompanyLogosSection = () => {
  //const companyLogos = getCompanyLogos2020();
  let companyIndexArray = [];
  const [companyLogos, setCompanies] = useState(getCompanyLogos2020());
  const [extraCompanies, setExtraCompanies] = useState('');

  const whichCompanies = () => {
    let companyPossibilites = [];
    for (let i = 0; i < companyLogos.length; ++i) {
      companyPossibilites.push(i);
    }
    companyPossibilites = shuffleArray(companyPossibilites);
    for (let i = 0; i < 5; ++i) {
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

  useEffect(() => {
    firebase.getInterestedCompanies().then(docs => {
      let extra = 0;
      docs.forEach(doc => {
        extra++;
      });
      setExtraCompanies(extra);
    });
  }, []);

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
          <p className='splash-company-paragraph'>And 11 more!</p>
        </div>
      </div>
    </Col>
  );
};

export default CompanyLogosSection;
