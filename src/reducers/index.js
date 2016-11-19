import { combineReducers } from 'redux'
import client from '../utils/apolloClient';
import home from './home'

const reducers = combineReducers({
  home,
  apollo: client.reducer()
})

export default reducers
