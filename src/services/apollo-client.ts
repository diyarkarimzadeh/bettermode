import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

const authLink = setContext((_, { headers }) => {
  const hasUserNetworkToken = !!localStorage.getItem('accessToken');

  return {
    headers: {
      ...headers,
      Authorization: hasUserNetworkToken
        ? `Bearer ${localStorage.getItem('accessToken')}`
        : `Bearer ${import.meta.env.VITE_GLOBAL_TOKEN}`,
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.log(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: import.meta.env.VITE_BASE_URL }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: relayStylePagination(),
        },
      },
    },
  }),
  link: authLink.concat(link),
});
