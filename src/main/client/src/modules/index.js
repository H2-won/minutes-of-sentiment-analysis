import { combineReducers } from 'redux';
import modal from './modal';
import meeting from './meeting';

const rootReducer = combineReducers({
  modal,
  meeting,
});

export default rootReducer;
