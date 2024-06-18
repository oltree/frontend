import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUser } from 'entities/user';
import { Routes } from 'shared/config/routes/config';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector(getUser);
  const location = useLocation();

  if (!auth) {
    return <Navigate replace to={Routes.MAIN} state={{ from: location }} />;
  }

  return children;
};
