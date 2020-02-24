import React from "react";
import "./ProjectSignupCard.scss";
import Button from "../Button/Button";
import FeatherIcon from "feather-icons-react";

const ProjectSignupCard = ({ title, students, projectId, enrollStudent }) => {
  return (
    <div className="sign-up-card">
      <div style={{ width: "100%" }}>
        <div className="project-card-title">{title}</div>
        {students.map((s, i) => (
          <div
            key={i}
            style={{
              display: "inline-block",
              marginRight: "8px",
              marginTop: "8px"
            }}
          >
            <FeatherIcon
              className="project-student-icon"
              icon="user"
              size="14"
              color="#707092"
            />
            <span className="project-student">{s.name}</span>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", top: "16px", right: "8px" }}>
        <Button
          enrollButton={true}
          onClick={() => enrollStudent(projectId, title)}
          type="ghost-secondary"
        >
          Add student
        </Button>
      </div>
    </div>
  );
};

export default ProjectSignupCard;
