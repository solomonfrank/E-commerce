import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from '../reducer/userReducer/userReducer';
import { cartReducer } from '../reducer/cartReducer/cartReducer'
import { toggleReducer } from '../reducer/toggleCartReducer/toggleCartReducer';
import errorReducer from '../reducer/errorReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

export const reducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    isHidden: toggleReducer,
    errorMessage: errorReducer,
    menuItem: [
        {
            id: 1,
            category: 'bag',
            image: 'images/bag2.webp',
            pathName : 'bag'
        },
        {
            id: 2,
              category: 'watch',
              image: 'images/watch1.webp',
              pathName : 'watch'
          },
          {
            id: 3,
              category: 'slipper',
              image: 'images/slipper1.webp',
              pathName : 'slipper'
          },
          {
            id: 5,
              category: 'cloth',
              image: 'images/cloth2.jpg',
              pathName : 'watch'
          },
        ],
})

export default persistReducer(persistConfig, reducer)

