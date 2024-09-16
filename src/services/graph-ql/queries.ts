import { gql } from '@apollo/client';

export const LOAD_POSTS = gql`
  query GetPosts(
    $limit: Int!
    $spaceIds: [ID!]
    $postTypeIds: [String!]
    $orderByString: String
    $reverse: Boolean
    $filterBy: [PostListFilterByInput!]
  ) {
    posts(
      limit: $limit
      spaceIds: $spaceIds
      postTypeIds: $postTypeIds
      orderByString: $orderByString
      reverse: $reverse
      filterBy: $filterBy
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
