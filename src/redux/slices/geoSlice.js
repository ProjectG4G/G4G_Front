import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api/geo";

const initialState =  {
    data: [],
    status: "idle",
    error: null,
  }
const geoSlice = createSlice({
    name:  "data" ,
    initialState,
    reducers: {
      setGeo: (state, {payload}) => {
        state.status = 'idle'

    }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.fulfilled, (state, action) => {
          return action.payload;
        });
    },
  });
  export const {
    setGeo
} = geoSlice.actions;  
  export default geoSlice;