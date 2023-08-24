import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64b181ab062767bc48264dc6.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'fetchContactsStatus',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'get',
        url: '/contacts',
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'addContactsStatus',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'post',
        url: `/contacts`,
        data: user,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'deleteContactsStatus',
  async (id, { rejectWithValue }) => {
    try {
      await axios({
        method: 'delete',
        url: `/contacts/${id}`,
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
