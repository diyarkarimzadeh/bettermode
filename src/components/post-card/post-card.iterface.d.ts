export interface IPost {
  __typename: string;
  id: string;
  title: string;
  description: string;
  reactionsCount: number;
  repliesCount: number;
  createdAt: Date;
  publishedAt: Date;
  space: ISpace;
  fields: Field[];
}

export interface ISpace {
  name: string;
  __typename: string;
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
