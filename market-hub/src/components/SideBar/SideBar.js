import React from 'react';
import { Link } from 'react-router-dom';


import './sidebar.scss';

const SideBar = () => {

    return (
        <div className='sidebar__content'>
         
            <ul className='category__list'>
                <li className='category__item'>
                    <Link  to='/shop' className='category__link'>Shop</Link>
                 </li>
                 <li className='category__item'>
                    <Link to='/clothes' className='category__link'>Clothes</Link>
                 </li>
                 <li className='category__item'>
                    <Link to='/bags' className='category__link'>Bags</Link>
                 </li>
                 <li className='category__item'>
                    <Link to='/login' className='category__link'>Sign in</Link>
                 </li>
                 <li className='category__item'>
                    <Link to='/signup' className='category__link'>Sign up</Link>
                 </li>
            </ul>
        </div>
    )
}

export default SideBar;