import React from 'react';
import './H2.scss';

const H2 = (props) => {
    return (
        <h2 className='h2'>{props.children}</h2>
    );
};

export default H2;