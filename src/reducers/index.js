import { combineReducers } from 'redux';
import ads from './ads';
import filter from './filter';

const reducers = combineReducers({
  ads,
  filter,
});

export default reducers;
