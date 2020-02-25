import React from "react";
import H3 from "../H3/H3";
import "./StudentProject.scss";

const StudentProject = ({ title, description, imgSrc }) => {
  return (
    <div
      className="prj-card"
      /*       style={{
        background: `linear-gradient(
      180deg,
      rgba(0, 0, 61, 0) 0%,
      rgba(0, 0, 61, 0.74) 100%
    ), url(./assets/Images/${imgSrc})`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }} */
    >
      <div className="prj-card-wrapper">
        <img className="prj-image-bg" src={`./assets/images/${imgSrc}`} />
        <div className='prj-image-bg-overlay' />
        <div className="header-description-wrapper">
          <H3>{title}</H3>
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default StudentProject;
