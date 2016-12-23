import { combineReducers } from 'redux';
import ads from './ads';
import filter from './filter';
import favorites from './favorites';

const reducers = combineReducers({
  ads,
  filter,
  favorites,
});

export default reducers;
