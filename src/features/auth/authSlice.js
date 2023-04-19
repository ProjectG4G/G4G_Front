import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messageSlice.js";
import axios from 'axios';

import AuthService from "../auth/authServices";

const user = JSON.parse(localStorage.getItem("user"));




// export const signupUser = createAsyncThunk(
//   "auth/register",
//   async ({ password2, email, password, first_name, last_name, phone_number = "", region, district }, thunkAPI) => {
//     try {
//       const response = await axios.post("http://34.159.231.164/api/auth/register/", {
//         password2,
//         email,
//         password,
//         first_name,
//         last_name,
//         phone_number,
//         region,
//         district
//       }, {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         }
//       });
      
//       let data = response.data;
//       console.log("data", data)
      
//       if (response.status === 200) {
//         localStorage.setItem("token", data.token)
//         return { ...data }
//       } else {
//         console.log(response)
//         return thunkAPI.rejectWithValue(data)
//       }
//     } catch (error) {
//       console.log("Error", error.response.data)
//       return thunkAPI.rejectWithValue(error.response.data)
//     }
//   }
// );
export const signupUser = createAsyncThunk(
    "auth/register",
    async (form, thunkAPI) => {
      try {
        const response = await AuthService.register(form);
        thunkAPI.dispatch(setMessage(response.data.message));
        console.log(response.data);
        return response.data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );
  


export const register = createAsyncThunk(
  "auth/register",
  async ({ password2, email, password,first_name,last_name,phone_number = "",region, district, }, thunkAPI) => {
    try {
      const response = await AuthService.register(password2, email, password,first_name,last_name,phone_number = "",region, district, );
      thunkAPI.dispatch(setMessage(response.data.message));
      console.log(response.data)
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
      try {
        const data = await AuthService.login(email, password);
        return { user: data };
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
  });

  const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };


  const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
      [signupUser.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
      },
      [signupUser.rejected]: (state, action) => {
        state.isLoggedIn = false;
      },
      [login.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      },
      [login.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
      [logout.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
    },
  });
  
  const { reducer } = authSlice;
  export default reducer;