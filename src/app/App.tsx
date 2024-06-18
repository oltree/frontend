import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Router } from 'app/providers/router';
import { getUserInited } from 'entities/user';
import { initAuthData } from 'entities/user/model/slice/user';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

export const App = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback=''>
        <Navbar />

        <div className='content'>
          <Sidebar />
          {inited && <Router />}
        </div>
      </Suspense>
    </div>
  );
};
