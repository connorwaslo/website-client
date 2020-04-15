import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../store/users/reducer';
import businessReducer from '../store/businesses/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  businesses: businessReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;