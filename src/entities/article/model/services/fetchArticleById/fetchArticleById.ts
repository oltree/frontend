import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/store';

import { IArticle } from '../../types/articleSchema';

export const fetchArticleById = createAsyncThunk<
  IArticle,
  string,
  ThunkConfig<string>
>('article/fetchArticleById', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<IArticle>(`/articles/${articleId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.error(error);
    return rejectWithValue('error');
  }
});
