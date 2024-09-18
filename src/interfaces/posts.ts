export interface PostData {
  posts: Posts;
}

export interface Posts {
  __typename: string;
  totalCount: number;
  pageInfo: PageInfo;
  nodes: Node[];
}

export interface Node {
  __typename: string;
  id: string;
  title: string;
  description: string;
  reactionsCount: number;
  createdAt: Date;
  publishedAt: Date;
  space: Space;
}

export interface Space {
  __typename: string;
  name: string;
}

export interface PageInfo {
  __typename: string;
  endCursor: string;
  hasNextPage: boolean;
}
