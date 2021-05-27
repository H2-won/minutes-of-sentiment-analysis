import { combineReducers } from 'redux';
import modal from './modal';
import meeting from './meeting';
import createdDate from './createdDate';

const rootReducer = combineReducers({
  modal,
  meeting,
  createdDate,
});

export default rootReducer;
