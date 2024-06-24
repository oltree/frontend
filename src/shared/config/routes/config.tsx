import { RouteProps } from 'react-router-dom';

import { About } from 'pages/about';
import { Article } from 'pages/article';
import { Articles } from 'pages/articles';
import { Main } from 'pages/main';
import { NotFound } from 'pages/not-found';
import { Profile } from 'pages/profile';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLE = 'article',
  ARTICLES = 'articles',
  NOT_FOUND = 'not_found',
}

export const routePaths: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile',
  [Routes.ARTICLE]: '/articles/',
  [Routes.ARTICLES]: '/articles',
  [Routes.NOT_FOUND]: '*', // last route
};

export const routeConfig: AppRouteProps[] = [
  {
    path: routePaths.main,
    element: <Main />,
  },
  {
    path: routePaths.about,
    element: <About />,
  },
  {
    path: routePaths.profile,
    element: <Profile />,
    authOnly: true,
  },
  {
    path: routePaths.articles,
    element: <Articles />,
    authOnly: true,
  },
  {
    path: `${routePaths.article}:id`,
    element: <Article />,
    authOnly: true,
  },
  {
    path: routePaths.not_found,
    element: <NotFound />,
  },
];
