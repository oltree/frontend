import { RouteProps } from 'react-router-dom';

import { About } from 'pages/about';
import { Main } from 'pages/main';
import { NotFound } from 'pages/not-found';
import { Profile } from 'pages/profile';

type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

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
    path: routePaths.not_found,
    element: <NotFound />,
  },
];
