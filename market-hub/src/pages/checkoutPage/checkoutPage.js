import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../../components/Category/Category';
import AboutUs from '../../components/AboutUs/AboutUs';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer'
import ToggleIcon from '../../components/ToggleIcon/ToggleIcon';
import CartNavHeader from '../../components/CartNavHeader/CartNavHeader';
import { addItem } from '../../redux/reducer/actionCreators/cartActionCreator';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { selectCartTotal } from '../../redux/selectors/cardSelector'

import { toggleCart } from '../../redux/reducer/actionCreators/toggleActionCreator';



import './checkoutPage.scss';




class CheckoutPage extends Component {
  state = {
    menuItem: [
      {
          id: 1,
          category: 'bag',
          image: 'images/bag2.webp',
          pathName : 'bag',
          price: 100
      },
      {
          id: 2,
            category: 'watch',
            image: 'images/watch1.webp',
            pathName : 'watch',
            price: 100
        },
        {
          id: 3,
            category: 'slipper',
            image: 'images/slipper1.webp',
            pathName : 'slipper',
            price: 100
        },
        {
          id: 5,
            category: 'cloth',
            image: 'images/cloth2.jpg',
            pathName : 'watch',
            price: 100
        },
      ],
     isHidden: false
    }
  render() {
  console.log(this.props)
    const { menuItem } = this.state;
    return (
      
      <div className='body__template'>
   
        <div className='sidebar__section'>
        <div className='logo__box'  >
        <p className='logo__box--title'>Market-Hub</p>
        </div>
        <ToggleIcon />
        <SideBar />
        </div>
        <header className='header__section'>
        <CartNavHeader />
        <div className='checkout'>
          <div className='checkout__header'>
         
            <div className='header__block'>
                <span>Product</span>
            </div>
            <div className='header__block'>
                <span>name</span>
            </div>
            <div className='header__block'>
                <span>quantity</span>
            </div>
            <div className='header__block'>
                <span>price</span>
            </div>
            <div className='header__block'>
                <span>Action</span>
            </div>
          </div>
          {this.props.cartItems.cart.map( item =><CheckoutItem  key={item.id} cartItem={ item }/>)}
          <div className='total'>
            <span>Total: N{this.props.cartTotal}</span>
            </div>
           
            </div>
            </header>
            <section className='main__section content'></section>
            <section className='article__section'>
              <div className='product__item'>
                <h2 className='product__item--title'>
                    Related Products
                </h2>
              </div>
              <div className='container'>
                  { menuItem.map( ( { id, category, categpory, image})=> ( <Category key={ id } image={ image} category={category}/>))}
              </div>
          </section>
           
          <section className='about__section'><AboutUs /> </section>
          <footer className='footer__section'><Footer /></footer>
          </div>
        )
      }
}


const mapDispatchToProp = (dispatch) => {
 return {
   addToCart: item => dispatch(addItem(item)),
   toggleCartModal: () => dispatch(toggleCart())
 }
}

const mapStateToProp = (state) =>({
 
  cartItems: state.cart,
  cartTotal: selectCartTotal(state)
})

export default connect(mapStateToProp, mapDispatchToProp)(CheckoutPage)