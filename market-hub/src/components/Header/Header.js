import React from 'react';


import ButtonLink from '../utils/Button'

import './header.scss';


const Header = () => {
    return (
        <header className='header'>
      
        <div className='text__box'>
            <h1 className='header__text'>
                <span className='header__text--primary'>Flash Sale</span>
                <span className='header__text--sub'>Market Place for all</span>
            </h1>
          
            <ButtonLink color='white' background='goldenrod' >Shop Now</ButtonLink>
        </div>
        </header>
    )
}

export default Header;
