import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectUserStatus } from 'redux/auth/auth-selectors';

export const PublicRouter = ({ component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectUserStatus);
  return isLogin ? <Navigate to={redirectTo} /> : component;
};
