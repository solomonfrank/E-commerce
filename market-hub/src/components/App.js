import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from '../pages/homepage/HomePage';
import BagPage from '../pages/bagPage/BagPage';
import ShopPage from '../pages/shopPage/ShopPage'



import './App.scss';

const App = () => {

    return ( 
        <div>
           
            <Router>
                <Route exact path ='/' component={HomePage} />
                <Route exact path ='/shop' component={ShopPage} />
             </Router>
       
        </div>
    )
}

export default App;