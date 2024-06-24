import { StateSchema } from 'app/providers/store';

import { getArticleError } from './getArticleError';

describe('article error', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        error: 'error',
      },
    };
    expect(getArticleError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleError(state as StateSchema)).toEqual(undefined);
  });
});
