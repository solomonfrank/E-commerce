import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';


import './sidebar.scss';

class SideBar extends Component {
   state = {
      currentUser: null
  }
  
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged( user => {
            this.setState({ currentUser: user });
          
            });
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }

  renderSignOutHelper = () => {

   if ( this.state.currentUser) {
      return (
          <React.Fragment> 
             <li className='category__item'>
               <Link  onClick={() => auth.signOut() } className='category__link'>Sign Out</Link>
             </li> 
          </React.Fragment>);
   }

      return (
         <React.Fragment>
            <li className='category__item'>
               <Link to='/login' className='category__link'>Sign in</Link>
            </li>
            <li className='category__item'>
            <Link to='/signup' className='category__link'>Sign up</Link>
         </li>
         </React.Fragment>
       );
  }

   render() {
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
                  { this.renderSignOutHelper()}
                 
             </ul>
         </div>
     )
   }

    
}

export default SideBar;