import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
// import 'isomorphic-fetch' // Comment out this line results in an error ...
import { InMemoryCache } from 'apollo-cache-inmemory';

// import ApolloClient from 'apollo-boost';

// const client = new ApolloClient({
//   uri: 'https://packrs-api.now.sh/graphql',
// });

// export default client;

const httpLink = createHttpLink({
  uri: 'https://packrs-api.now.sh/graphql',
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
