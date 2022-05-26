import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: '/',
  cache: new InMemoryCache(),
});
