import React from 'react';
import './H1.scss';
import { Visible, Hidden } from 'react-grid-system';

const H1 = ({ children }) => {
  return (
    <>
      <Visible md lg xl>
        <h1 className='h1'>{children}</h1>
      </Visible>
      <Hidden md lg xl>
        <h1 className='h1-small'>{children}</h1>
      </Hidden>
    </>
  );
};
export default H1;
