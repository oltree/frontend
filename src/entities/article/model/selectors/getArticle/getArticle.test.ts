import { StateSchema } from 'app/providers/store';

import { getArticle } from './getArticle';

describe('article', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    };
    const state: DeepPartial<StateSchema> = {
      article: {
        data,
      },
    };
    expect(getArticle(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state data', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticle(state as StateSchema)).toEqual(undefined);
  });
});
