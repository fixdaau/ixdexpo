import React from 'react';

import H2 from '../H2/H2';
import './HowDoesInteractionDesignFit.scss';

const howDoesInteractiondesignFitFront = () => (
  <div className="front">
    <div className="container">
      <H2>How does interaction design fit your business?</H2>
      <img
        src={require('../../Images/InteractiondesignFitBusiness.svg')}
        alt=""
      />
    </div>
  </div>
);

export default howDoesInteractiondesignFitFront;
