import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, PublicApi } from "./api";

import axios from 'axios';

export const fetchAllTrainings = createAsyncThunk('users/fetchAll', async () => {
    const response = await PublicApi.get('training/trainings');
    return response.data;
  });
