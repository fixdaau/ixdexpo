import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <a href={props.url}>
        <button className='button'>{props.children}</button>
        </a>
    );
};

export default Button;