import { combineReducers } from 'redux';

import sellerReducer from './sellerReducers';
import productReducer from './productReducers';
import loginReducer from './LoginReducer';

const rootReducer = combineReducers({
  sellerStore: sellerReducer,
  productStore: productReducer,
  loginStore:loginReducer
});

export default rootReducer;