import { login, reset } from "../../api/auth";
import { register } from "../../api/auth";
import { fetchData } from "../../api/geo";
import jwt_decode from "jwt-decode";


export const loginExtraReducer = {
    [register.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        state.status = 'login in'
        console.log(action.payload)
      },
      [register.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.status = action.payloadå
      },
    [login.pending]: (state) => {
        state.status = 'Loggin in';
        state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
        console.log('Login payload: ', payload);
        state.isLogged = true;
        state.error = null;
        state.user = payload.user;
        localStorage.setItem('user', JSON.stringify(payload.user));
    },
    [login.rejected]: (state, {payload}) => {
        state.status = 'Rejected loggin in';
        state.error = payload;
    },
    [fetchData.rejected]: (state, {payload}) => {
        state.status = 'Rejected to fetch geo';
        state.error = payload;
    },
    [reset.rejected]: (state, {payload}) => {
        state.status = 'reset confirm in';
        state.error = payload;
    },
    [reset.rejected]: (state, {payload}) => {
        state.status = 'Rejected to reset';
        state.error = payload;
    },
    [fetchData.pending]: (state, {payload}) => {
        state.status = ' idle';
        state.error = payload;
    },
    [fetchData.fulfilled]: (state, {payload}) => {
        state.status = 'success';
        state.data = payload;
    }
}

