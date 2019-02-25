import React from 'react';
import './Divider.scss';

const Divider = ({ marginOnTop, marginOnBottom }) => {
    let className = 'divider';
    if (marginOnTop) className += ' divider-margin-top';
    if (marginOnBottom) className += ' divider-margin-bottom';

    return <div className={className} />;
}

export default Divider;