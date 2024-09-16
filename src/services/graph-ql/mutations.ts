import { gql } from '@apollo/client';

export const LOGIN_NETWORK = gql`
  mutation loginNetwork($input: LoginNetworkWithPasswordInput!) {
    loginNetwork(input: $input) {
      accessToken
      refreshToken
    }
  }
`;
