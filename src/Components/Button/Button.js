import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {

  const goToDiv = url => {
    if(url[0] !== '#') return;

    const elmnt = document.getElementById('interested-section');
    elmnt.scrollIntoView({behavior: 'smooth'});
  }

  const getUrl = url => url[0] === '#' ? '/' : url;

  return (
    <Link to={getUrl(props.url)}>
      <button onClick={() => { props.onClick(); goToDiv(props.url) }} className='button'>{props.children}</button>
    </Link>
  );
};

export default Button;