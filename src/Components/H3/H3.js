import React from 'react';
import './H3.scss';

const H3 = (props) => {
    return (
        <div>
            <h3 className='h3'>{props.children}</h3>
        </div>
    );
};

export default H3;


