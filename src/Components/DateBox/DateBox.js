import React from 'react';
import './DateBox.scss';

const DateBox = () => {
  return (
    <div className='date-box'>
      <div className='date-box-top'>
        <p className='date-day'>20</p>
        <p className='date-month-year'>MARCH, 2020</p>
      </div>
      <div className='date-box-bottom'>
        <div>
          <p className='date-building'>Cassiopeia</p>
          <p className='date-city'>AALBORG</p>
        </div>
      </div>
    </div>
  );
};

export default DateBox;
