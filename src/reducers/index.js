import { combineReducers } from 'redux'
import client from '../helpers/apolloClient';
import ads from './ads'

const reducers = combineReducers({
  ads,
  apollo: client.reducer()
})

export default reducers
