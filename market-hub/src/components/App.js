import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shopPage/ShopPage';
import LoginPage from '../pages/loginPage/LoginPage';
import SignUpPage from '../pages/signUpPage/SignUpPage';
import ItemPage from '../pages/ItemPage/ItemPage';



import './App.scss';


class App extends Component { 
  render() {
    return ( 
      <div>
         
          <Router>
              <Route exact path ='/' component={HomePage} />
              <Route exact path ='/shop' component={ShopPage} />
              <Route exact path ='/login' render={ () =>this.props.currentUser ? <Redirect to='/' /> : <LoginPage />  } />
              <Route exact path ='/signup' component={SignUpPage} />
              <Route exact path ='/item/:name' component={ItemPage} />
           </Router>
     
      </div>
  )
   }
    
    
   
}

const mapStateToProp = ({ user }) => ({
    currentUser: user.currentUser

})
export default connect( mapStateToProp )(App);