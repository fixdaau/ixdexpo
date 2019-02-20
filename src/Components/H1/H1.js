import React from 'react';
import './H1.scss';

const H1 = (props) => {
    return (
        <h1 className='h1'>{props.children}</h1>
    );
};

export default H1;