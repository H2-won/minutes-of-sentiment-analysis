import { combineReducers } from 'redux';
import modal from './modal';
import meeting from './meeting';
import meetingLog from './meetingLog';
import createdDate from './createdDate';

const rootReducer = combineReducers({
  modal,
  meeting,
  meetingLog,
  createdDate,
});

export default rootReducer;
