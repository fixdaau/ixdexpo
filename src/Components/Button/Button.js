import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <Link to={props.url}>
      <button onClick={props.onClick} className='button'>{props.children}</button>
    </Link>
  );
};

export default Button;