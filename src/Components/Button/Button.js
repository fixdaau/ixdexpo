import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = props => {
  let className = 'button';
  if (props.enrollButton) className += ' button-enroll';
  if (props.primaryButton) className += ' button-primary';
  if (props.secondaryButton) className += ' button-secondary';
  if (props.ghostButton) className += ' button-ghost';
  if (props.smallWhiteButton) className += ' button-swhite';

  const goToDiv = url => {
    if (!url.includes('#')) window.location.href = url;

    const elmnt = document.getElementById(url.split('#')[1]);
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }

  const getUrl = url => {
      return '/';
    
    console.log(url[0] === '#' ? '/' : url);
    return url[0] === '#' ? '/' : url;
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
