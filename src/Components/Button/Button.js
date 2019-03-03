import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {

  const goToDiv = url => {
    if (url[0] !== '#') return;

    const elmnt = document.getElementById('interested-section');
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }

  const getUrl = url => url[0] === '#' ? '/' : url;
  
  return (
    props.url && props.url.length ?
      <Link to={getUrl(props.url)}>
        <button onClick={() => { props.onClick(); goToDiv(props.url) }} className='button'>{props.children}</button>
      </Link>
      :
      <button onClick={() => { props.onClick(); }} className='button'>{props.children}</button>
  );
};

export default Button;