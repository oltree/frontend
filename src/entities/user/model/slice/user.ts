import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { IUser } from '../types/user';
import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
  authData: undefined,
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: state => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }

      state._inited = true;
    },
    logout: state => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { setAuthData, initAuthData, logout } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
