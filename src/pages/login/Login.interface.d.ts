export interface LoginData {
  loginNetworkWithPassword: LoginNetworkWithPassword;
}

export interface LoginNetworkWithPassword {
  accessToken: string;
  refreshToken: string;
  member: Member;
  __typename: string;
}

export interface Member {
  email: string;
  username: string;
  profilePicture: ProfilePicture;
  activeSession: ActiveSession;
  __typename: string;
}

export interface ProfilePicture {
  url: string;
  __typename: string;
}

export interface Extensions {
  complexity: number;
}

export interface ActiveSession {
  id: string;
  active: boolean;
  __typename: string;
}
