import React from 'react';

import H2 from '../H2/H2';
import './WhatIsInteractiondesign.scss';

const whatIsInteractiondesignBack = () => (
  <div className="back">
    <div className="container">
      <H2>What is interaction design?</H2>
      <img src={require('../../Images/Icon_Project.svg')} alt="" />
      <p className="content">
        Interaction design is a creative, construction-oriented discipline.
      </p>
      <img src={require('../../Images/Icon_Repair.svg')} alt="" />
      <p className="content">
        Designing interactive product, both tangible and digital.
      </p>
      <img src={require('../../Images/Icon_Thophy.svg')} alt="" />
      <p className="content">
        The goal is to enhance the way people live. Or make way for a better
        reality.
      </p>
    </div>
  </div>
);

export default whatIsInteractiondesignBack;
