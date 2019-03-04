import React from "react";
import "./InfoPieceCard.scss";
import H3 from "../H3/H3";

const InfoPieceCard = ({ iconSrc, title, text }) => {
  return (
    <div className="info-card">
      <div className="img-wrapper">
        <img
          className="icon-box"
          src={require(`../../Images/${iconSrc}`)}
          alt={title}
        />
      </div>
      <H3>{title}</H3>
      <p>{text}</p>
    </div>
  );
};

export default InfoPieceCard;
