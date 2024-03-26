import { RouteProps } from 'react-router-dom';

import { About } from 'pages/about';
import { Main } from 'pages/main';

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routePaths: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
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
];
