import { ThunkConfig } from '@/app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  if (!articleId) {
    throw new Error('');
  }

  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`, {
      params: {
        _expand: 'user',
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue('error');
  }
});
