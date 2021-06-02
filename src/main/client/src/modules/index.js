import { combineReducers } from 'redux';
import modal from './modal';
import meeting from './meeting';
import meetingLog from './meetingLog';
import createdDate from './createdDate';
import connectionInfo from './connectionInfo';

const rootReducer = combineReducers({
  modal,
  meeting,
  meetingLog,
  createdDate,
  connectionInfo,
});

export default rootReducer;
