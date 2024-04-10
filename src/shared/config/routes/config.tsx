import { RouteProps } from 'react-router-dom';

import { About } from 'pages/about';
import { Main } from 'pages/main';
import { NotFound } from 'pages/not-found';

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const routePaths: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.NOT_FOUND]: '*',
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
    path: routePaths.not_found,
    element: <NotFound />,
  },
];
