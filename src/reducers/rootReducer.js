import productsReducer from './productsReducer';
import cardReducer from './cardReducer';
import ownerReducer from './ownerReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    
    products: productsReducer,
    card: cardReducer,
    owner: ownerReducer,
   
})

export default rootReducer;