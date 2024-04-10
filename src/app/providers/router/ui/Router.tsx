import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routes/config';
import { PageLoader } from 'widgets/page-loader';

export const Router = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
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
};
