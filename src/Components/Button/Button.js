import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = props => {
  let className = 'button';
  if (props.enrollButton) className += ' button-enroll';

  const goToDiv = url => {
    if (!url.includes('#')) window.location.href = url;

    const elmnt = document.getElementById(url.split('#')[1]);
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }

  const getUrl = url => {
    if(url[0] === 'h') {
      return '/'
    }

    return url;
  }
  
  return (
    props.url && props.url.length ?
    <Link to={getUrl(props.url)}>
      <button
        onClick={() => {
          props.onClick();
          goToDiv(props.url);
        }}
        className={className}
      >
        {props.children}
      </button>
    </Link>
      :
      <button onClick={(e) => { e.preventDefault(); props.onClick(); }} className={className}>{props.children}</button>
  );
};

export default Button;
