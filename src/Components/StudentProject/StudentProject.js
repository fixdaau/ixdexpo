import React from "react";
import H3 from "../H3/H3";
import "./StudentProject.scss";

const StudentProject = ({ title, description, imgSrc }) => {
  return (
    <div className="prj-card">
      <div className="prj-card-wrapper">
        <div className="image-sizer">
          <img
            className="prj-img"
            src={require(`../../Images/${imgSrc}`)}
            alt={title}
          />
        </div>
        <H3>{title}</H3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StudentProject;
