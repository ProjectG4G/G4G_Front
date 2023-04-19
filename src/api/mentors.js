import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, PublicApi } from "./api";



export const fetchMentors = createAsyncThunk('mentors/fetchMentors', async () => {
  try {
    const response = await PublicApi.get(`/mentorship/mentors/`);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch mentors data');
  }
});