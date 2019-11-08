import React, { Component } from 'react';
import MenuItem from '../../components/menuItem/MenuItem';
import Category from '../../components/Category/Category';
import Header from '../../components/Header/Header';
import AboutUs from '../../components/AboutUs/AboutUs';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer'
import ToggleIcon from '../../components/ToggleIcon/ToggleIcon';


import './homePage.scss';


class HomePage extends Component {
  constructor(props) {
      super(props);
      console.log(props)
  }
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
                </div>
                <ToggleIcon />
                <SideBar />
            </div>
            <header className='header__section'>
                <Header /> 
            </header>
            <section className='main__section content'>
             <div className='product__item'>
                <h2 className='product__item--title'>Product Category</h2>
              </div>
              <div className='container'>
                 { menuItem.map( ( { id, category, categpory, image})=> ( <MenuItem key={ id } image={ image} category={category}/>))}
              </div>
            </section>
                <section className='article__section'>
                <div className='product__item'>
                    <h2 className='product__item--title'>Hot Products</h2>
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

export default HomePage;