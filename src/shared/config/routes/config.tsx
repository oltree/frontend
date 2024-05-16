import { RouteProps } from 'react-router-dom';

import { About } from 'pages/about';
import { Main } from 'pages/main';
import { NotFound } from 'pages/not-found';
import { Profile } from 'pages/profile';

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile',
}

export const routePaths: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile',
  [Routes.NOT_FOUND]: '*', // last route
};

export const routeConfig: RouteProps[] = [
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
  },
  {
    path: routePaths.not_found,
    element: <NotFound />,
  },
];
