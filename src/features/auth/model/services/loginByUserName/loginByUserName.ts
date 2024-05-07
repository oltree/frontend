import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  { rejectValue: string }
>('login/loginByUserName', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post<IUser>(
      'http://localhost:8000/login',
      data
    );

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(setAuthData(response.data));

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});
