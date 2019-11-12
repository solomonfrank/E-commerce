import React from 'react';
import { connect } from 'react-redux';
import { toggleCart } from '../redux/reducer/actionCreators/toggleActionCreator';
import { Link } from 'react-router-dom';

import './checkout.scss';

const ViewCheckout = ( props ) => {

  return (
    
    <div className='popup'>
       
         <div className='popup__content'>

           <p className='flash__item'>{ props.title } cloth successfully added</p>
           <div className='btn__group'>
           <button onClick={ props.toggleCartModal} className='btn btn__cont'>Continue Shopping</button>
          <Link to='/checkout' className='btn btn__view'>View Cart</Link>
           </div>
      
         </div>
       
        
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartModal: () => dispatch(toggleCart())
  }
}
export default connect(null, mapDispatchToProps)(ViewCheckout);