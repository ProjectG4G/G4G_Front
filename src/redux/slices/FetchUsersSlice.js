import { createSlice } from "@reduxjs/toolkit";
import { deleteUserById, editUserById, fetchAllUsers, updateUserById } from "../../api/user";

const FetchUsersSlice = createSlice({
    name: 'users',
    initialState: {
      users: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllUsers.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAllUsers.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.users = action.payload.filter(user => !user.is_superuser);

        })
        .addCase(fetchAllUsers.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(deleteUserById.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(deleteUserById.fulfilled, (state, action) => {
          state.isLoading = false;
          state.users = state.users.filter((user) => user.id !== action.payload);
        })
        .addCase(deleteUserById.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        })
        builder.addCase(editUserById.pending, (state) => {
          state.loading = true;
          state.error = null;
        });
    
        builder.addCase(editUserById.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          const editedUser = action.payload;
          const index = state.users.findIndex((user) => user.id === editedUser.id);
          if (index !== -1) {
            state.users[index] = editedUser;
          }
        });
    },
  });
  
  export const {} = FetchUsersSlice.actions;

  export default FetchUsersSlice;