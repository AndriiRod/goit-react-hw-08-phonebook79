import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeaderToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeaderToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const createNewUser = createAsyncThunk(
  'createNewUserStatus',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'post',
        url: '/users/signup',
        data: data,
      });
      setAuthHeaderToken(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'loginUserStatus',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'post',
        url: '/users/login',
        data: data,
      });
      setAuthHeaderToken(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'logoutUserStatus',
  async (_, { rejectWithValue }) => {
    try {
      await axios({
        method: 'post',
        url: '/users/logout',
      });
      clearAuthHeaderToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'refreshUserStatus',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) return thunkAPI.rejectWithValue('No token');
    setAuthHeaderToken(token);
    try {
      const response = await axios({
        method: 'get',
        url: '/users/current',
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
