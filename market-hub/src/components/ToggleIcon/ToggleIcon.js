import React from 'react';
import { Link } from 'react-router-dom'

import './toggleIcon.scss';

const ToggleIcon = () => {

    return (
        <React.Fragment>
        
                
         
         <div className='toggleNav'>
         <div className='toggle'>
             <input type='checkbox' className='checkbox__btn' id='check__form'/>
             <label  htmlFor='check__form' className='toggle__btn'>
                <span className='navigation__icon'>&nbsp;</span>
             </label>

             <div className='nav__background'></div>

             <ul className='navigation__list'>
                <li className='navigation__list--item'>
                    <Link className='navigation__list--link'>Shop</Link>
                 </li>
                 <li className='navigation__list--item'>
                    <Link className='navigation__list--link'>Clothes</Link>
                 </li>
                 <li className='navigation__list--item'>
                    <Link className='navigation__list--link'>Bags</Link>
                 </li>
                 <li className='navigation__list--item'>
                    <Link className='navigation__list--link'>Sign in</Link>
                 </li>
                 <li className='navigation__list--item'>
                    <Link className='navigation__list--link'>Sign up</Link>
                 </li>
            </ul>
            </div>
           
           
         </div>
            
           
         
        </React.Fragment>
       
    )
}

export default ToggleIcon;