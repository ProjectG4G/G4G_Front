import { createSlice } from '@reduxjs/toolkit';
import { fetchMentors } from '../../api/mentors';
const initialState = {
    mentors: [],
    status: 'idle',
    error: null,
  };

  export const mentorsSlice = createSlice({
    name: 'mentors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchMentors.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchMentors.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.mentors = action.payload;
        })
        .addCase(fetchMentors.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  
  export default mentorsSlice;
  