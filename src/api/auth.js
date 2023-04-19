import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, PublicApi } from "./api";
import jwt_decode from 'jwt-decode'


export const login = createAsyncThunk(
    'auth/login',
    async (form, thunkAPI) => {
        try {
            const response = await PublicApi.post(`auth/login/`, form);
            let token = response.data.access;
            localStorage.setItem('token', token);
            localStorage.setItem('refresh', response.data.refresh);

            let userId = jwt_decode(token)?.user_id;
            localStorage.setItem('userID', userId);

            let userData = await API.get('auth/users/' + userId).then(res => res.data);
            
            return {...response.data, user: userData};
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.message);            
        }
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (form, thunkAPI) => {
        try {
            const response = await PublicApi.post(`auth/register/`, form);
            console.log('Register response: ', response.data);
          
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.message);            
        }
    }
);
export const reset = createAsyncThunk(
    'auth/reset',
    async (form, {rejectWithValue}) => {
        try {
            const response = await PublicApi.post(`auth/password_reset/`, form);
            console.log('Reset response: ', response.data);
          
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);            
        }
    }
);

export const validateToken = createAsyncThunk(
    'auth/validateToken',
    async (token, {rejectWithValue}) => {
        try {
            const response = await PublicApi.post('auth/password_reset/validate_token/', token);
            console.log(response.data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
)
export const setNewPassword = createAsyncThunk(
    'auth/setNewPassword',
    async (token, {rejectWithValue}) => {
        try {
            const response = await PublicApi.post('auth/password_reset/confirm/', token);
            console.log(response.data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
)