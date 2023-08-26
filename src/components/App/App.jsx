import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddContact from 'pages/AddContact';
import Contacts from 'pages/Contacts';
import Registration from 'pages/Registration';
import Login from 'pages/Login';
import Home from 'pages/Home';

import SharedLayout from 'components/SharedLayout/';

import { refreshUser } from 'redux/auth/auth-operations';
import { selectRefreshingStatus } from 'redux/auth/auth-selectors';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshingStatus);
  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Contacts />} />
            <Route path="addContact" element={<AddContact />} />
            <Route path="home" element={<Home />}>
              <Route path="log" element={<Login />} />
              <Route path="reg" element={<Registration />} />
            </Route>
          </Route>
        </Routes>
        <ToastContainer theme="colored" />
      </>
    )
  );
};

export default App;
