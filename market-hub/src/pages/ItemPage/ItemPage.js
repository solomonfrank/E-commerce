import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../components/Category/Category';
import AboutUs from '../../components/AboutUs/AboutUs';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer'
import ToggleIcon from '../../components/ToggleIcon/ToggleIcon';



import './itemPage.scss';


class ItemPage extends Component {
    state = {
        menuItem: [
            {
               id: 1,
                category: 'bag',
                image: 'images/bag2.webp',
                pathName : 'bag'
            },
            {
                id: 2,
                 category: 'watch',
                 image: 'images/watch1.webp',
                 pathName : 'watch'
             },
             {
                id: 3,
                 category: 'slipper',
                 image: 'images/slipper1.webp',
                 pathName : 'slipper'
             },
             {
                id: 5,
                 category: 'cloth',
                 image: 'images/cloth2.jpg',
                 pathName : 'watch'
             },
       
        
         

        ]
    }

    render() {
        const { menuItem } = this.state;
        return (
          <div className='body__template'>
            <div className='sidebar__section'>
            <div className='logo__box'  >
            <p className='logo__box--title'>Market-Hub</p>
            {/* <img className='logo' src='images/logo4.png' alt='marketHub_Logo'/> */}
        </div>
                <ToggleIcon />

                <SideBar />
            </div>
            <header className='header__section'>
                <div className='header__nav--cart'>
                    <ul className='cart__icon'>
                     <li className='cart__icon--list cart__icon--one'>
                         <Link className='cart__link'>
                         <img className='image__cart' src='images/cart.png'alt='cart-icon' />
                        
                         <sup className='icon__count--wrapper'> <span className='cart__count'>0</span></sup>
                         </Link>
                      
                     </li>
                     <li className='cart__icon--list cart__icon--two'>
                         <Link className='cart__link'>
                         <img  className='image__cart'src='images/profile.png' alt='cart-profile' />
                         </Link>
                      
                     </li>
                    </ul>
                </div>
               
            <div className='item__gallery'>
                    <div className='item__cart--image'>
                        <figure className='cart__image--wrapper'>
                            <img src='images/cloth1.webp'className='cart__image' />
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
                               <button className='btn__addCart' type='button'> Add to Cart</button>
                           </div>

                           <div className='desc'>
                               <h2>Description</h2>
                               <p className='desc__para'>
                               Lightweight, low-profile Primaloft® quilting makes this a three-season staple. Packable with a concealed hood and insulated mock-neck collar, it goes wherever you go.
                               </p>
                           </div>
                           <div className='desc'>
                               <h2>Shipping</h2>
                               <p className='desc__para'>
                               Lightweight, low-profile Primaloft® quilting makes this a three-season staple. Packable with a concealed hood and insulated mock-neck collar, it goes wherever you go.
                               </p>
                           </div>

                       </div>
                    </div>
                </div>

            </header>

            <section className='main__section content'>
           
          
            
            </section>
           
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
            <section className='about__section'>
            <AboutUs />
            </section>
            <footer className='footer__section'>
                <Footer />
            </footer>
           
            
          
           
           
             </div>
             )
            }
}

export default ItemPage;