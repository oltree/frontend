import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store';

import { IProfile } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<IProfile>('/profile');

    return response.data;
  } catch (error) {
    console.error(error);
    return rejectWithValue('error');
  }
});
