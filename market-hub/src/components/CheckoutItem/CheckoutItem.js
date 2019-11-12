import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem, removeSingleItem } from '../../redux/reducer/actionCreators/cartActionCreator';

import './checkoutItem.scss';

const CheckoutItem = ({ removeItemCart, addToCart, reduceItem, cartItem:{ cartItem }}) => {

 const  { category, quantity , image , price} = cartItem

return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={image} className='cart-item-pix' alt='item pix'/>
    </div>
    <span className='name'>{ category}</span>
    <span className='quantity'>  <span className='form__btn'>
                <button  onClick={ () => reduceItem(cartItem) }  type='button' className='btn__cart'> - </button>
                  <span className='display__count'>{quantity}</span>
                <button  onClick={ () => addToCart(cartItem) } type='button' className='btn__cart'>+</button>
              </span></span>
    <span className='price'>${price}</span>
    <div  onClick ={() => removeItemCart(cartItem) } className='remove-button'>&#10005;</div>
  </div>
)
}

const mapDispatchToProps = (dispatch) => {
return {
  removeItemCart: item => dispatch(removeItem(item)),
  addToCart: item => dispatch(addItem(item)),
  reduceItem: item => dispatch(removeSingleItem(item))
}
}

const mapStateToProps =(state, ownProps) => {
  return {
    cartItem: ownProps
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);