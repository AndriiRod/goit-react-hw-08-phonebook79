import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

import { lazy, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PublicRouter } from 'components/PublicRouter';
import { PrivateRouter } from 'components/PrivateRoute';

import { refreshUser } from 'redux/auth/auth-operations';
import {
  selectRefreshingStatus,
  selectUserStatus,
} from 'redux/auth/auth-selectors';

import { Wrap } from './Wrap.styled';

import AppBar from 'components/AppBar/AppBar';

const Home = lazy(() => import('pages/Home'));
const AddContact = lazy(() => import('pages/AddContact'));
const Contacts = lazy(() => import('pages/Contacts'));
const Registration = lazy(() => import('pages/Registration'));
const Login = lazy(() => import('pages/Login'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshingStatus);
  const status = useSelector(selectUserStatus);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Wrap>
        {status && <AppBar />}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRouter component={<Home />} redirectTo="/contacts" />
              }
            >
              <Route
                path="reg"
                element={
                  <PublicRouter
                    component={<Registration />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="log"
                element={
                  <PublicRouter component={<Login />} redirectTo="/contacts" />
                }
              />
            </Route>
            <Route
              path="/contacts"
              element={
                <PrivateRouter component={<Contacts />} redirectTo="/" />
              }
            />
            <Route
              path="/addContact"
              element={
                <PrivateRouter component={<AddContact />} redirectTo="/" />
              }
            />
          </Routes>
        </Suspense>
        <ToastContainer theme="colored" />
      </Wrap>
    )
  );
};

export default App;
