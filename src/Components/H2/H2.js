import React from 'react';
import './H2.scss';

const H2 = ({ children, alignment }) => {
    let className = 'h2';
    if(alignment === 'left') className += ' h2-left';
    if(alignment === 'right') className += ' h2-right';

    return <h2 className={className}>{children}</h2>;
}

export default H2;
