import { gql } from '@apollo/client';

export const ADD_REACTION = gql`
  mutation AddReaction($input: AddReactionInput!, $postId: ID!) {
    addReaction(input: $input, postId: $postId) {
      status
    }
  }
`;

export const REMOVE_REACTION = gql`
  mutation RemoveReaction(
    $participantId: String
    $postId: ID!
    $reaction: String!
  ) {
    removeReaction(
      participantId: $participantId
      postId: $postId
      reaction: $reaction
    ) {
      status
    }
  }
`;

export const LOGIN_NETWORK = gql`
  mutation LoginNetworkWithPassword($input: LoginNetworkWithPasswordInput!) {
    loginNetworkWithPassword(input: $input) {
      accessToken
      refreshToken
      member {
        email
        username
        activeSession {
          id
          active
        }
        profilePicture {
          ... on Image {
            url
          }
        }
      }
    }
  }
`;

export const LOGOUT_NETWORK = gql`
  mutation LogoutNetwork($input: LogoutNetworkInput!) {
    logoutNetwork(input: $input) {
      status
    }
  }
`;
