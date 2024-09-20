import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

const authLink = setContext((_, { headers }) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik02QzFxdVFrUkEiLCJuZXR3b3JrSWQiOiJYZXhGT0hxSTNkIiwibmV0d29ya0RvbWFpbiI6ImZyb250ZW5kLmJldHRlcm1vZGUuaW8iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoiaU5USzNtNEpzYW1za2dIVzJTN0RSdU5pUDJxZHZ0WnZjUGVvMUp2Sk5RdWw4YVozcjAiLCJpYXQiOjE3MjY3NTEzOTksImV4cCI6MTcyOTM0MzM5OX0.aq38POMHC5vF6OmzHTB35dfF_C2ByXhzQfPkOrl2Nf8';

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
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
  new HttpLink({ uri: 'https://api.bettermode.com' }),
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
