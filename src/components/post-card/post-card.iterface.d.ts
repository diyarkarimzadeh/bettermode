export interface IPost {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  publishedAt: Date;
  space: ISpace;
  reactionsCount: number;
  __typename: string;
}

export interface ISpace {
  name: string;
  __typename: string;
}
