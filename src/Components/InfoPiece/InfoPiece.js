import React from "react";

const InfoSection = ({ icon, headline, text }) => {
  return (
    <div>
      <img src={require(`../../Images/${icon}`)} alt={icon} />
      <p>{headline}</p>
      <p>{text}</p>
    </div>
  );
};

export default InfoSection;
