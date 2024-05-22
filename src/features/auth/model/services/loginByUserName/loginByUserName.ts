import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store';
import { IUser } from 'entities/user';
import { setAuthData } from 'entities/user/model/slice/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  IUser,
  LoginByUserNameProps,
  ThunkConfig<string>
>(
  'login/loginByUserName',
  async (data, { rejectWithValue, dispatch, extra }) => {
    try {
      const response = await extra.api.post<IUser>('/login', data);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );
      dispatch(setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue('error');
    }
  }
);
