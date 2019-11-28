import React, { Component } from 'react';
import MenuItem from '../../components/menuItem/MenuItem';
import Category from '../../components/Category/Category';
 import Header from '../../components/Header/Header';
import AboutUs from '../../components/AboutUs/AboutUs';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer'
import ToggleIcon from '../../components/ToggleIcon/ToggleIcon';
import { Link } from 'react-router-dom'
import CartNavHeader from '../../components/CartNavHeader/CartNavHeader';






// import './homePage.scss';
import  { BodyTemplate, SidebarWrapper, MainContent, ProductContainer,H2} from  './home.style';


class HomePage extends Component {

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
       
        
         

        ]
    }

    render() {
        const { menuItem } = this.state;
        return (

          <BodyTemplate >
           
        
     
            <SidebarWrapper>
                <div className='logo__box'  >
                <Link to='/' className='logo__box--title'>Market-Hub</Link>
                </div>
                <ToggleIcon />
                <SideBar />
                
            </SidebarWrapper>
            <MainContent>
            <CartNavHeader />
             <Header /> 


           <div className='heading'>
           <H2>Product Category</H2>
           </div>
            {<ProductContainer>
            <div className='container'>
                 { menuItem.map( ( { id, category, categpory, image})=> ( <MenuItem key={ id } image={ image} category={category}/>))}
              </div>
            </ProductContainer>}
            <div className='heading'>
           <H2>Product Category</H2>
           </div>
                <ProductContainer>
               
                
              
            
                <div className='container'>
                
                    { menuItem.map( ( { id, category, categpory, image})=> ( <Category key={ id } image={ image} category={category}/>))}
                
                </div>
         
                </ProductContainer>
                <section className='about__section'>
                <AboutUs />
                </section>
                <footer className='footer__section'>
                    <Footer />
                </footer>

            </MainContent>
           
           </BodyTemplate>
             )
            }
}

export default HomePage;