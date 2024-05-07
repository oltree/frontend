import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loginByUserName } from '../services/loginByUserName/loginByUserName';
import { LoginSchema } from '../types/loginShema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUserName.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUserName.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(loginByUserName.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setUserName, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
