import React from 'react';
import  { withRouter, Link } from 'react-router-dom'

import './MenuItem.scss';


const MenuItem = ( { image, category, title, history, match}) => {

    let style = {
        backgroundImage: `url(../../${image})`,
        backgroundPosition: 'center',
        backgroundSize:'cover'
    }
  
    return (
        <div className='item__card'>
            <div className='item__menu item__menu--front'>
             <div className='item__menu--picture' style={ style }> </div>
             <div className='item__content' onClick={ () => history.push(`${match.url}${category}`) }>
               <h2 className='item__content--category'>{category}</h2>
               
            </div> 
           </div>
        <div className='item__menu item__menu--back'>
            <div className='content__collection'>
             <div className='content__collection--box1'>
             <p className='content__collection--box1--text'>Quality  and affordables Bags</p>
             </div> 
                <div className='content__collection--box2'>
                <Link className='content__collection--btn'>{ category } Collection</Link>
                </div> 
             </div>
        </div>
     </div>
    )
}

export default withRouter(MenuItem);