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
  repliesCount: number;
  createdAt: Date;
  publishedAt: Date;
  space: Space;
  fields: Field[];
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

export interface Field {
  relationEntities: RelationEntities | null;
  __typename: Typename;
}

export enum Typename {
  CustomField = 'CustomField',
}

export interface RelationEntities {
  medias: Media[];
  __typename: string;
}

export interface Media {
  url: string;
  __typename: string;
}
