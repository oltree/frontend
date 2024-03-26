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

export const routeConfig: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    path: routePaths.main,
    element: <Main />,
  },
  [Routes.ABOUT]: {
    path: routePaths.about,
    element: <About />,
  },
};
