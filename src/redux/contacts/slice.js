import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from 'redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload.reverse();
};

const addContactsReducer = (state, action) => {
  state.items.unshift(action.payload);
  state.isLoading = false;
  state.error = null;
};

const deleteContactsReducer = (state, action) => {
  state.items = state.items.filter(item => item.id !== action.payload);
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, fetchContactsReducer)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, addContactsReducer)
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, deleteContactsReducer)
      .addCase(deleteContacts.rejected, handleRejected),
});

export default contactSlice.reducer;
