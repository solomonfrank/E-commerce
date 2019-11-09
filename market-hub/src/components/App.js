import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shopPage/ShopPage';
import LoginPage from '../pages/loginPage/LoginPage';
import SignUpPage from '../pages/signUpPage/SignUpPage';
import ItemPage from '../pages/ItemPage/ItemPage';



import './App.scss';

const App  = () => { 
    return ( 
            <div>
               
                <Router>
                    <Route exact path ='/' component={HomePage} />
                    <Route exact path ='/shop' component={ShopPage} />
                    <Route exact path ='/login' component={LoginPage} />
                    <Route exact path ='/signup' component={SignUpPage} />
                    <Route exact path ='/item' component={ItemPage} />
                 </Router>
           
            </div>
        )
    
   
}

export default App;