import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, PublicApi } from "./api";

import axios from 'axios';



export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userData }, { rejectWithValue }) => {
    try {
      const userID = localStorage.getItem("userID");
      const formData = new FormData();
      formData.append("first_name", userData.first_name);
      formData.append("last_name", userData.last_name);
      formData.append("email", userData.email);
      formData.append("old_password", userData.oldPassword);
      formData.append("new_password", userData.password);
      formData.append("profile_picture", userData.profile_picture); // Add user photo data

      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace "token" with the key for your token in localStorage
          "Content-Type": "multipart/form-data", // Set the Content-Type header for FormData
        },
      };

      const response = await API.patch(`auth/users/${userID}/`, formData,config);
      localStorage.setItem('user', JSON.stringify(response.data));

      console.log(response.data);
      window.location.reload()

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


// export const editUserById = createAsyncThunk(
//   "user/updateUser",
//   async ({ userID, userData }, { rejectWithValue }) => { // Pass the userID as a parameter
//     try {
//       const formData = new FormData();
//       formData.append("first_name", userData.first_name);
//       formData.append("last_name", userData.last_name);
//       formData.append("email", userData.email);
//       formData.append("old_password", userData.oldPassword);
//       formData.append("new_password", userData.password);
//       formData.append("profile_picture", userData.profile_picture); // Add user photo data

//       const config = {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace "token" with the key for your token in localStorage
//           "Content-Type": "multipart/form-data", // Set the Content-Type header for FormData
//         },
//       };

//       const response = await API.patch(`auth/users/${userID}/`, formData, config); // Use the userID parameter in the API URL
//       localStorage.setItem('user', JSON.stringify(response.data));

//       console.log(response.data);
//       window.location.reload()

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const editUserById = createAsyncThunk('users/editUserById', async (payload) => {
  const { userId, userData } = payload;
  try {
    const formData = new FormData();
    formData.append("first_name", userData.first_name);
    formData.append("last_name", userData.last_name);
    formData.append("email", userData.email);
    formData.append("old_password", userData.oldPassword);
    formData.append("new_password", userData.password);
    formData.append("is_staff", userData.is_staff);

    formData.append("profile_picture", userData.profile_picture); 
  
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, 
        "Content-Type": "multipart/form-data",
      },
    };
  }
  catch(error) {

  }

  const response = await API.patch(`auth/users/${userId}/`, userData);
  console.log(response.data);
  return response.data;
});


export const updateUserById = createAsyncThunk('users/updateUserById', async ({ userId, userData }) => {
  try {

    const formData = new FormData();
    formData.append("first_name", userData.first_name);
    formData.append("last_name", userData.last_name);
    formData.append("email", userData.email);
    formData.append("old_password", userData.oldPassword);
    formData.append("new_password", userData.password);
    formData.append("profile_picture", userData.profile_picture);

    const config = {
      headers: {
     
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await API.patch(`auth/users/${userId}`, userData,config);
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw Error('Failed to update user');
  }
});

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
  const response = await API.get('auth/users');
  return response.data;
});


export const deleteUserById = createAsyncThunk('users/deleteById', async (userId) => {
  await API.delete(`auth/users/${userId}`);
  return userId;
});



const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace "token" with the key for your token in localStorage
    "Content-Type": "multipart/form-data", // Set the Content-Type header for FormData
  },
};

