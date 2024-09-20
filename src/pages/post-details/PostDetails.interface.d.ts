export interface Data {
  getPost: GetPost;
}

export interface GetPost {
  id: string;
  title: string;
  description: string;
  textContent: string;
  reactions: Reaction[];
  createdAt: Date;
  createdBy: CreatedBy;
  repliesCount: number;
  reactionsCount: number;
  subscribersCount: number;
  tags: Tag[];
  thumbnail: null;
  status: string;
  url: string;
  __typename: string;
}

export interface CreatedBy {
  member: Member;
  __typename: string;
}

export interface Member {
  id: string;
  name: string;
  profilePicture: ProfilePicture;
  __typename: string;
}

export interface ProfilePicture {
  url: string;
  __typename: string;
}

export interface Reaction {
  reacted: boolean;
  __typename: string;
}

export interface Tag {
  id: string;
  title: string;
  slug: string;
  __typename: string;
}

export interface Extensions {
  complexity: number;
}
