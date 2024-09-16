import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik02QzFxdVFrUkEiLCJuZXR3b3JrSWQiOiJYZXhGT0hxSTNkIiwibmV0d29ya0RvbWFpbiI6ImZyb250ZW5kLmJldHRlcm1vZGUuaW8iLCJ0b2tlblR5cGUiOiJVU0VSIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwic2Vzc2lvbklkIjoiV24zZVJHZUV1Z1hQNEVRc0ltbmxvQThsM0MxdFNmRG1sSGhVSmFVdHVVWnZLbFplcFgiLCJpYXQiOjE3MjY0MTA2OTAsImV4cCI6MTcyOTAwMjY5MH0.QI_C-zZtBt86-Qpz-OuPZuvnnBtkxX1Bb3cjdpsK6IM';

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
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});
