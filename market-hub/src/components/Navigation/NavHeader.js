import React from 'react';
import { Link } from 'react-router-dom';

import './navHeader.scss';

const NavHeader = () => {
    return (
        <div className='navHeader'>
            <div className='navHeader__background'></div>
            <nav className='navHeader__nav'>
                <ul className='nav__list'>
                    <li className='nav__item' ><Link className='nav__link'>Shop</Link></li>
                    <li className='nav__item' ><Link className='nav__link'>Clothes</Link></li>
                    <li className='nav__item' ><Link className='nav__link'>Shoes</Link></li>
                    <li className='nav__item' ><Link className='nav__link'>Sign in</Link></li>
                    <li className='nav__item' ><Link className='nav__link'>Sign out</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavHeader;