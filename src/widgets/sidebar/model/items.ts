import { SVGProps, VFC } from 'react';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { routePaths } from 'shared/config/routes/config';

export interface IItem {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const itemsList: IItem[] = [
  {
    path: routePaths.main,
    Icon: MainIcon,
    text: 'Main',
  },
  {
    path: routePaths.about,
    Icon: AboutIcon,
    text: 'About us',
  },
  {
    path: routePaths.profile,
    Icon: ProfileIcon,
    text: 'Profile',
    authOnly: true,
  },
  {
    path: routePaths.articles,
    Icon: ArticleIcon,
    text: 'Articles',
    authOnly: true,
  },
];
