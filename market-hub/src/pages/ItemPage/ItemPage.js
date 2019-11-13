import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Category from '../../components/Category/Category';
import AboutUs from '../../components/AboutUs/AboutUs';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer'
import ToggleIcon from '../../components/ToggleIcon/ToggleIcon';
import CartNavHeader from '../../components/CartNavHeader/CartNavHeader';
import { addItem } from '../../redux/reducer/actionCreators/cartActionCreator';

import { toggleCart } from '../../redux/reducer/actionCreators/toggleActionCreator';
import Modal from '../../modal/Checkout';
import ViewCheckOut from '../../modal/ViewCheckOut';


import './itemPage.scss';




class ItemPage extends Component {
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

    toggleCartModal = () => {
     
      this.setState(prevState => ({
        isHidden: !prevState.isHidden
      }))
    }
  addItemTocart = () => {
   const {  addToCart , match:{ params: { name }}} = this.props;
   const item = this.state.menuItem.find( item => item.category === name)
  
  addToCart(item);
  this.props.toggleCartModal();
 
   
  }

  renderModal = () => {

    if (this.props.isHidden.isHidden) {
      
      return  <ViewCheckOut isHidden= {this.toggleCartModal} />
    }else {
      return null
    }
  
  }
 
  render() {

    const { menuItem } = this.state;
    return (
      
      <div className='body__template'>
     <Modal>
      {this.renderModal()}
     </Modal>   
        <div className='sidebar__section'>
        <div className='logo__box'  >
        <p className='logo__box--title'>Market-Hub</p>
        </div>
        <ToggleIcon />
        <SideBar />
        </div>
        <header className='header__section'>
        <CartNavHeader />
        <div className='item__gallery'>
          <div className='item__cart--image'>
            <figure className='cart__image--wrapper'>
              <img src='images/cloth1.webp'className='cart__image' alt='cloth pic' />
            </figure>
          </div>
            <div className='item__gallery--cart'>
              <div className='cart__title'>Cloth one</div>
              <p className='cart__price'>$200.00</p>
              <p className=''>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
              <div className='cart__size'>
              <div className='form__group form__group--cart'>
                <div className='label__name'>
                  <label className='label__name label__name--color'>Size</label>
                </div>
                <div className='input__wrapper'>
                <select name='color' className='size'>
                  <option>Choose option</option>
                  <option> S</option>
                  <option> M</option>
                  <option> L</option>
                  <option> XL</option>
                </select>
                </div>
              </div>
              <div className='form__group form__group--cart'>
                <div className='label__name'>
                  <label className='label__name label__name--color'>Color</label>
                </div>
                <div className='input__wrapper'>
                <select name='color' className='size'>
                  <option>Choose option</option>
                  <option> white</option>
                  <option> red</option>
                  <option> yellow</option>
                  <option> black</option>
                </select>
                </div>
              </div>
              <div className='form__btn'>
                <button type='button' className='btn__cart'> - </button>
                  <span className='display__count'>0</span>
                <button  type='button' className='btn__cart'>+</button>
              </div>
             
              <div className='cart__btn'>
             
              <button onClick={ this.addItemTocart } className='btn__addCart' type='button'> Add to Cart</button>
              </div>
              <div className='desc'>
                <h2>Description</h2>
                <p className='desc__para'>
                Lightweight, low-profile Primaloft® quilting makes this a three-season staple. Packable with a concealed hood 
                and insulated mock-neck collar, it goes wherever you go.
                </p>
              </div>
              <div className='desc'>
                <h2>Shipping</h2>
                <p className='desc__para'>
                Lightweight, low-profile Primaloft® quilting makes this a three-season staple. Packable with a 
                concealed hood and insulated mock-neck collar, it goes wherever you go.
                </p>
              </div>
              </div>
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
  isHidden: state.isHidden
})
const withRoute = withRouter((ItemPage));
export default connect(mapStateToProp, mapDispatchToProp)(withRoute)