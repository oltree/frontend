import { createSlice } from '@reduxjs/toolkit';

import { UserSchema } from '../types/userShema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;