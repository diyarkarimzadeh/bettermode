import { FC } from 'react';
import paths from './paths';
import Home from '../pages/home';
import Login from '../pages/login';
import Posts from '../pages/posts';
import PostDetails from '../pages/post-details';

export type pathKeys = keyof typeof paths;
export type PathValues = (typeof paths)[pathKeys];

export type TRoute = {
  path: PathValues;
  component: FC;
};

const routeConfig: TRoute[] = [
  {
    path: paths.home,
    component: Home,
  },
  {
    path: paths.login,
    component: Login,
  },
  {
    path: paths.posts,
    component: Posts,
  },
  {
    path: paths.postDetails,
    component: PostDetails,
  },
];

export default routeConfig;
