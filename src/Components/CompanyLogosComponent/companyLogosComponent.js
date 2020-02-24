import React from 'react';
import './companyLogosComponent.scss';

const CompanyLogos = ({ imgSrc, url }) => {
  return (
    <div className='logos' style={{ opacity: 0.4 }}>
      <a href={url} target='_blank'>
        <img
          className='logo-img'
          src={require(`../../Images/CompanyLogos2020/${imgSrc}`)}
          alt='test'
        />
      </a>
    </div>
  );
};

export default CompanyLogos;
