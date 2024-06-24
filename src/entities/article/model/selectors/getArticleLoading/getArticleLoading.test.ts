import { StateSchema } from 'app/providers/store';

import { getArticleLoading } from './getArticleLoading';

describe('article loading', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: true,
      },
    };
    expect(getArticleLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleLoading(state as StateSchema)).toEqual(false);
  });
});
