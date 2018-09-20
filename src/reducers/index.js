import { combineReducers } from 'redux';
import analysis from './analysis';
import users from './user';
import movie from './movie';

  const  rootReducer = combineReducers({
    users,
    movie
  })
export default rootReducer;