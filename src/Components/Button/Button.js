import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = props => {
  let className = 'button';
  if (props.type) className += ' button-' + props.type;

  const goToDiv = url => {
    if (url.includes('https')) window.location.href = url;
    if (url.includes('#')) {
      const elmnt = document.getElementById(url.split('#')[1]);
      elmnt.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getUrl = url => {
    if (url[0] === '/') return url;

    return '/';
  };

  return props.url && props.url.length ? (
    <Link to={getUrl(props.url)}>
      <button
        onClick={(e) => {
          props.onClick(e);
          goToDiv(props.url);
        }}
        className={className}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </Link>
  ) : (
    <button
      onClick={e => {
        e.preventDefault();
        props.onClick(e);
      }}
      className={className}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
