interface siteConfigInterface {
  name: string;
  title: string;
  description: string;
  mainNav: MainNavInterface[];
}

interface MainNavInterface {
  id: number;
  title: string;
  href: string;
}

export const siteConfig: siteConfigInterface = {
  name: 'BatterMode',
  title: 'Your desired Github repository is one search away🚀',
  description:
    'You can search between millions of repository in Github and have a detail information for each one of them',
  mainNav: [
    {
      id: 1,
      title: 'Home',
      href: '/',
    },
    {
      id: 2,
      title: 'Posts',
      href: '/posts',
    },
  ],
};
