import { createStore, applyMiddleware, compose } from 'redux';
import client from '../helpers/apolloClient';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  applyMiddleware(client.middleware()),
  DevTools.instrument()
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
