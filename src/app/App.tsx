import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Router } from 'app/providers/router';
import { initAuthData } from 'entities/user/model/slice/user';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <Navbar />

        <div className='content'>
          <Sidebar />
          <Router />
        </div>
      </Suspense>
    </div>
  );
};
