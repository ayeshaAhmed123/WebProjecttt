import { combineReducers } from 'redux';

import sellerReducer from './sellerReducers';
import productReducer from './productReducers';
import loginReducer from './LoginReducer';
import { orderReducer } from './orderReducer';
const rootReducer = combineReducers({
  sellerStore: sellerReducer,
  productStore: productReducer,
  loginStore:loginReducer,
  orderStore:orderReducer
});

export default rootReducer;