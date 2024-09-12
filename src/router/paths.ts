const paths = {
  home: '/',
  login: '/login',
  posts: '/posts',
  postDetails: '/posts/detail/:id',
} as const;

export const pathValues = Object.values(paths);

export default paths;
