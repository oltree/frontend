import { LoginSchema } from '../types/loginShema';

import loginReducer, { setPassword, setUserName } from './login';

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' };
    expect(loginReducer(state as LoginSchema, setUserName('123123'))).toEqual({
      username: '123123',
    });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, setPassword('123123'))).toEqual({
      password: '123123',
    });
  });
});
