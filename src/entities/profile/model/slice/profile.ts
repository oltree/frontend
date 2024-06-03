import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { IProfile, ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  form: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload;
    },
    cancelEdit: state => {
      state.readonly = true;
      state.form = state.data;
    },
    updateProfile: (state, { payload }: PayloadAction<IProfile>) => {
      state.form = {
        ...state.form,
        ...payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, { payload }: PayloadAction<IProfile>) => {
          state.isLoading = false;
          state.data = payload;
          state.form = payload;
        }
      )
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(updateProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, { payload }: PayloadAction<IProfile>) => {
          state.isLoading = false;
          state.data = payload;
          state.form = payload;
          state.readonly = true;
        }
      )
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setReadonly, cancelEdit, updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
