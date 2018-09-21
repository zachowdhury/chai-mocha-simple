import { combineReducers } from 'redux';
import analysis from './analysis';
import users from './user';
import time from './time';

  const  rootReducer = combineReducers({
    time,
    
  })
export default rootReducer;