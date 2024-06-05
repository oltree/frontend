import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store';

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { IProfile, ValidateProfileError } from '../../types/profileSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<IProfile>('/profile', formData);

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
);
