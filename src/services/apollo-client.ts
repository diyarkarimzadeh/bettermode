import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

const authLink = setContext((_, { headers }) => {
  const hasUserNetworkToken = !!localStorage.getItem('accessToken');
  const globalToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdVRVNUX040Yk9LS21MSGVjQUVjUiIsIm5ldHdvcmtJZCI6IlhleEZPSHFJM2QiLCJuZXR3b3JrRG9tYWluIjoiZnJvbnRlbmQuYmV0dGVybW9kZS5pbyIsInRva2VuVHlwZSI6IkdVRVNUIiwiZW50aXR5SWQiOm51bGwsInBlcm1pc3Npb25Db250ZXh0IjpudWxsLCJwZXJtaXNzaW9ucyI6bnVsbCwiaWF0IjoxNzI2ODY1MDQ4LCJleHAiOjE3Mjk0NTcwNDh9.P7M0VdlORWz6jl8Rig0s3LUZlKzGx7eC4IeaiyXUcT4';

  return {
    headers: {
      ...headers,
      Authorization: hasUserNetworkToken
        ? `Bearer ${localStorage.getItem('accessToken')}`
        : `Bearer ${globalToken}`,
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
