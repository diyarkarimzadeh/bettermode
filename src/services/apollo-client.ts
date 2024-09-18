import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdVRVNUXzZDa2Q0SDZLcUlLSDlLVCIsIm5ldHdvcmtJZCI6IlhleEZPSHFJM2QiLCJuZXR3b3JrRG9tYWluIjoiZnJvbnRlbmQuYmV0dGVybW9kZS5pbyIsInRva2VuVHlwZSI6IkdVRVNUIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwiaWF0IjoxNzI2NTI3NzUyLCJleHAiOjE3MjkxMTk3NTJ9.EafZt5DmoKR6OWz2-9STFvWw_siEFsHqb_MoblV1lVE';

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
