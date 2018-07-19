import { combineReducers } from 'redux';
import poemReducer from './poemReducer';

export default combineReducers({
  poem: poemReducer
})