import ApolloClient, { createNetworkInterface } from 'apollo-client';
import AuthService from './AuthService';

const networkInterface = createNetworkInterface({ uri: '/graphql' });

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    req.options.headers['authorization'] = AuthService.getToken() ? 'Bearer ' + AuthService.getToken() : null;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
});


module.exports = client;
