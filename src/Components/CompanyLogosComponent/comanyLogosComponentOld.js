import React from "react";
import "./companyLogosComponentOld.scss";

const CompanyLogosOld = ({ imgSrc, url }) => {
  return (
    <div className="logos">
      <a href={url} target="_blank">
        <img
          className="logo-img"
          src={require(`../../Images/CompanyLogos/${imgSrc}`)}
          alt="test"
        />
      </a>
    </div>
  );
};

export default CompanyLogosOld;
