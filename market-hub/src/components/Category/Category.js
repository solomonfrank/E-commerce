import React from 'react';
import  { withRouter, Link } from 'react-router-dom'

import './category.scss';


const Category = ( { image, category, title, history, match}) => {

    let style = {
        backgroundImage: `url(../../${image})`,
        margin: 0
    }
  
    return (
    
        
        
            <div className='item'>
       
         <div className='item--picture' style={ style }></div>
           
        <div className='item__content' onClick={ () => history.push(`/item/${category}`) }>
            <p className='item__content--title'>Italian light color bag</p>
            <p className='item__content--price'>N3000</p>
         
        </div> 
        <div className='item--order'>
        <Link to= {`/item/${category}`} className='item--order--link'>Order Now</Link>
        </div>
        
     
     
           
     </div>
    )
}

export default withRouter(Category);