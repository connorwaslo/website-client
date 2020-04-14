import { combineReducers } from 'redux';
import authReducer from './authReducer';
import businessReducer from './businessReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  business: businessReducer()
});

export default rootReducer;