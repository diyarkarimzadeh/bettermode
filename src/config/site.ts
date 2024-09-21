interface siteConfigInterface {
  name: string;
  mainNav: MainNavInterface[];
}

interface MainNavInterface {
  id: number;
  title: string;
  href: string;
}

export const siteConfig: siteConfigInterface = {
  name: 'BatterMode',
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
