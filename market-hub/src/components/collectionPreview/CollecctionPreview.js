import React from 'react';

import './collectionPreview.scss';

const CollectionPreview = ({categoryType, category}) => {
   
    return (
        <div className='collection'>
            <h2 className='collection__title'>{category}</h2>
            <div className='collection__container'>
                {categoryType.map(item => (
                <div className='collection__content' key={item.id}>
                <div className='collection__content--top'>
                    <img  className='collection__content--image' src={item.imageLink} alt={item.type}/>
                    
                </div>
                <div className='collection__content--bottom'>
                        <div className='collection__content--icon-text'>
                            <p>{item.type}</p>
                        </div>
                    </div>
                </div>

                ))}
         
            </div>
          

        </div>
    )
}

export default CollectionPreview;