import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

const Footer = () => {

    return (
        <div className='footer'>
            <ul className='nav__footer'>
                <li className='nav__list'>
                    <Link className='nav__link'>Get in touch</Link>
                </li>
                <li className='nav__list'>
                    <Link className='nav__link'>Return Item</Link>
                </li>
                <li className='nav__list'>
                    <Link className='nav__link'>Help</Link>
                </li>
                <li className='nav__list'>
                    <Link className='nav__link'>Link</Link>
                </li>
            </ul>
            <p className='copyright'>&copy; copyright of market-hub</p>
        </div>
    );
}

export default Footer;