import React, { Component } from 'react';
import { collections } from '../../constant';
import CollectionPreview from '../../components/collectionPreview/CollecctionPreview'


class ShopPage extends Component {

    state =  {
        collections,

    }

   
    render() {
        return (
            <div>
                { this.state.collections.map( ({ id, categoryType, category }) =>(  <CollectionPreview key={id }  category={category} categoryType={categoryType}/> ))}
             
            </div>
        )
    }
}

export default ShopPage;