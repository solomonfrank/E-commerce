import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCartCount } from '../../redux/selectors/cardSelector';

import './CartNavHeader.scss';

const CartNavHeader = ({ itemCount }) => {
  return (
    <div className='header__nav--cart'>
    <ul className='cart__icon'>
     <li className='cart__icon--list cart__icon--one'>
         <Link className='cart__link'>
         <img className='image__cart' src='/images/cart.png' alt='cart-icon'/>
        
         <sup className='icon__count--wrapper'> <span className='cart__count'>{ itemCount }</span></sup>
         </Link>
      
     </li>
     <li className='cart__icon--list cart__icon--two'>
         <Link className='cart__link'>
         <img  className='image__cart'src='/images/profile.png' alt='cart-profile' />
         </Link>
      
     </li>
    </ul>
</div>
  )
}

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartCount(state)
}
}
export default connect(mapStateToProps)(CartNavHeader);