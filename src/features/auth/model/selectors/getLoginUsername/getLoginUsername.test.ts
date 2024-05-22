import { StateSchema } from 'app/providers/store';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'oleg123',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('oleg123');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
