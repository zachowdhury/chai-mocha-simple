import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import analysis from './analysis';
import users from './user';
import time from './time';

  const  rootReducer = combineReducers({
    time,
    form:formReducer,
    
  })
export default rootReducer;