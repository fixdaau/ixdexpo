import React from 'react';
import './Footer.scss';
import HR from '../HR/HR';

const Footer = () => {
    return (
        <div>
            <HR></HR>
            <div className='bottomText'>
                <p >FixD © 2019</p>
                <div className='endText'>
                    <p>Expo team</p>
                    <p>ixd-expo@fixd.aau.dk</p>
                </div>
            </div>
            
        </div>
    );
};


export default Footer;


