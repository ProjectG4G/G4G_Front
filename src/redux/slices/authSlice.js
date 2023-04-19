import { createSlice } from "@reduxjs/toolkit";
import {loginExtraReducer} from '../extraReducers/authExtraReducer'

const initialState = {
    isLogged: localStorage.getItem('user') ? true : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    status: 'active',
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogout: (state) => {
            state.isLogged = false;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            localStorage.removeItem('user');
            localStorage.removeItem('userID');
            localStorage.removeItem('UserPass');


        },
    },
    extraReducers: {
        ...loginExtraReducer

    }
});

export const {setLogout,isLogged} = authSlice.actions;

export default authSlice.reducer