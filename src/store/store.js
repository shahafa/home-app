import { createStore, applyMiddleware, compose } from 'redux';
import client from '../utils/apolloClient';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  applyMiddleware(client.middleware()),
  DevTools.instrument()
);

const initialState = {
  home: {
    profile: {
      name: '',
      picture: '',
    }
  }
}
const store = createStore(rootReducer, initialState, enhancer);

export default store;
