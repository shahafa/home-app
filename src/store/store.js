import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
);

const store = createStore(rootReducer, enhancer);

export default store;
