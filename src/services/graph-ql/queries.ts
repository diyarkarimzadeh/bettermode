import { gql } from '@apollo/client';

export const LOAD_POSTS = gql`
  query GetPosts(
    $limit: Int!
    $spaceIds: [ID!]
    $postTypeIds: [String!]
    $orderByString: String
    $reverse: Boolean
    $filterBy: [PostListFilterByInput!]
    $after: String
  ) {
    posts(
      limit: $limit
      spaceIds: $spaceIds
      postTypeIds: $postTypeIds
      orderByString: $orderByString
      reverse: $reverse
      filterBy: $filterBy
      after: $after
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        title
        description
        reactionsCount
        createdAt
        publishedAt
        space {
          name
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      title
      description
      textContent
      reactions {
        reacted
      }
      createdAt
      createdBy {
        member {
          id
          name
          profilePicture {
            ... on Image {
              url
            }
          }
        }
      }
      repliesCount
      reactionsCount
      subscribersCount
      tags {
        id
        title
        slug
      }
      textContent
      thumbnail {
        ... on Image {
          url
        }
      }
      status
      url
    }
  }
`;
