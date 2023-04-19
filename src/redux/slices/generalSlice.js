import { createSlice } from "@reduxjs/toolkit";
import i18next from "i18next";

const initialState = {
    language: localStorage.getItem("selectedLanguage") || 'ky',
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLanguage: (state, {payload}) => {
            state.language = payload;
            localStorage.setItem("selectedLanguage", payload);
            i18next.changeLanguage(state.language);

        }
    },
    extraReducers: {
    }
});

export const {
    setLanguage
} = generalSlice.actions;

export default generalSlice;
