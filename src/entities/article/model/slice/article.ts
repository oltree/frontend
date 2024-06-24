import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema, IArticle } from '../types/articleSchema';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticleById.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, { payload }: PayloadAction<IArticle>) => {
          state.isLoading = false;
          state.data = payload;
        }
      )
      .addCase(fetchArticleById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default articleSlice.reducer;
