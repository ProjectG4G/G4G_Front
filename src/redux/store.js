import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from  './slices/authSlice'
import generalSlice from "./slices/generalSlice";
import geoSlice from "./slices/geoSlice";
import mentorsSlice from "./slices/mentorsSlice";
import { userSlice } from "./slices/userSlice";
import FetchUsersSlice from "./slices/FetchUsersSlice";
import  { trainingsSlice } from "./slices/tranings";

export const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [generalSlice.name]: generalSlice.reducer,
        [geoSlice.name] : geoSlice.reducer,
        [userSlice.name] : userSlice.reducer,
        [trainingsSlice.name] : trainingsSlice.reducer,
        [mentorsSlice.name] : mentorsSlice.reducer,
        [FetchUsersSlice.name] : FetchUsersSlice.reducer,


    }
});