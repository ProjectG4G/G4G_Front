import { createSlice } from "@reduxjs/toolkit";
import i18next from "i18next";
import { updateUser } from "../../api/user";


const initialState =  { data: null, isLoading: false, error: null };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(updateUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload;
          state.error = null;

          
        })
        .addCase(updateUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
          console.log(state.error)
        });
      
    },
  });
  export const {} = userSlice.actions;

  export default userSlice.reducer;