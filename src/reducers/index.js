import { combineReducers } from 'redux';
import authReducer from './authReducer';
import businessReducer from './businessReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  businesses: businessReducer
});

export default rootReducer;