import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from 'components/AppBar/AppBar';
import { PublicRouter } from 'components/PublicRouter';
import { PrivateRouter } from 'components/PrivateRoute';

import AddContact from 'pages/AddContact';
import Contacts from 'pages/Contacts';
import Registration from 'pages/Registration';
import Login from 'pages/Login';
import Home from 'pages/Home';

import { refreshUser } from 'redux/auth/auth-operations';
import {
  selectRefreshingStatus,
  selectUserStatus,
} from 'redux/auth/auth-selectors';

import { Wrap } from './Wrap.styled';

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
            element={<PrivateRouter component={<Contacts />} redirectTo="/" />}
          />
          <Route
            path="/addContact"
            element={
              <PrivateRouter component={<AddContact />} redirectTo="/" />
            }
          />
        </Routes>
        <ToastContainer theme="colored" />
      </Wrap>
    )
  );
};

export default App;
