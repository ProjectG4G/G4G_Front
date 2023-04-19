import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://34.159.231.164/geoapi/json/');
      let data = response.data
      return data

    }
 
    catch(err) {
      return thunkAPI.rejectWithValue(err.response.data.message);            

    }

  }
);
