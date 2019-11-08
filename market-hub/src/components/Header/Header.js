import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';


const Header = () => {
    return (
        <header className='header'>
      
        <div className='text__box'>
            <h1 className='header__text'>
                <span className='header__text--primary'>Flash Sale</span>
                <span className='header__text--sub'>Market Place for all</span>
            </h1>
            <Link to='/'className='header__text--btn'>Shop Now</Link>
        </div>
        </header>
    )
}

export default Header;
