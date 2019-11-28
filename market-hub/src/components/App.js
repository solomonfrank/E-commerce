import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shopPage/ShopPage';
import LoginPage from '../pages/loginPage/LoginPage';
import SignUpPage from '../pages/signUpPage/SignUpPage';
import ItemPage from '../pages/ItemPage/ItemPage';
import CheckoutPage from '../pages/checkoutPage/checkoutPage';
import Dashboard from '../pages/dashboard/dashboard'




import './App.scss';


class App extends Component { 
  render() {
    return ( 
      <div>
         
          <Router>
              <Route exact path ='/' component={HomePage} />
              <Route exact path ='/shop' component={ShopPage} />
              <Route exact path ='/login' render={ () => this.props.currentUser ? <Redirect to='/dashboard' /> : <LoginPage />  } />
              <Route exact path ='/signup' component={SignUpPage} />
              <Route exact path ='/item/:name' component={ItemPage} />
              <Route exact path ='/checkout' component={CheckoutPage} />
              <Route exact path ='/dashboard' component={Dashboard} />
           </Router>
     
      </div>
  )
   }
    
    
   
}

const mapStateToProp = ({ user }) => ({
    currentUser: user.currentUser

})
export default connect( mapStateToProp )(App);