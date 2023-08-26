import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectUserStatus } from 'redux/auth/auth-selectors';
import { selectRefreshingStatus } from 'redux/auth/auth-selectors';

export const PrivateRouter = ({ component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectUserStatus);
  const isRefresh = useSelector(selectRefreshingStatus);
  const shouldRedirect = !isRefresh && !isLogin;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
