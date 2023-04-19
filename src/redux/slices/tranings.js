import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTrainings, fetchAllTranings } from '../../api/tranings';
const initialState = {
    tranings: [],
    status: 'idle',
    error: null,
  };

  export const trainingsSlice = createSlice({
    name: 'trainings',
    initialState: { trainings: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllTrainings.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchAllTrainings.fulfilled, (state, action) => {
          state.loading = false;
          state.trainings = action.payload;
        })
        .addCase(fetchAllTrainings.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  
  export default trainingsSlice;
  