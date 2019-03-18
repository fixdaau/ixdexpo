import React from "react";
import "./companyLogosComponent.scss";

const CompanyLogos = ({ imgSrc }) => {
    return (
        <div className="logos">
            <img className="img"
                src={require(`../../Images/${imgSrc}`)}
                alt="test"
            />
        </div> 
    );
};

export default CompanyLogos;