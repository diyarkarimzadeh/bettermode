import { gql } from '@apollo/client';

export const LOGIN_NETWORK = gql`
  mutation loginNetwork($input: LoginNetworkWithPasswordInput!) {
    loginNetwork(input: $input) {
      accessToken
      refreshToken
    }
  }
`;

export const ADD_REACTION = gql`
  mutation AddReaction($input: AddReactionInput!, $postId: ID!) {
    addReaction(input: $input, postId: $postId) {
      status
    }
  }
`;
