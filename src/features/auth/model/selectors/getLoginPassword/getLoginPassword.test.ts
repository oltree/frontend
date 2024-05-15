import { DeepPartial } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/store';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '12345qwerty',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('12345qwerty');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
