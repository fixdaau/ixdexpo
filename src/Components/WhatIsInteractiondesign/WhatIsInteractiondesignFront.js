import React from 'react';

import H2 from '../H2/H2';
import './WhatIsInteractiondesign.scss';

const whatIsInteractiondesignFront = () => (
  <div className="front">
    <div className="container">
      <H2>What is interaction design?</H2>
      <img src={require('../../Images/WhatIsInteractiondesign.svg')} alt="" />
    </div>
  </div>
);

export default whatIsInteractiondesignFront;
