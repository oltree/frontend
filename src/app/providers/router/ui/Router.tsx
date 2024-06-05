import { getUser } from 'entities/user';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routes/config';
import { PageLoader } from 'widgets/page-loader';

export const Router = memo(() => {
  const isAuth = useSelector(getUser);
  const routes = useMemo(() => {
    if (isAuth) {
      return routeConfig;
    }

    return routeConfig.filter(route => !route.authOnly);
  }, [isAuth]);

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className='page'>{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
});
