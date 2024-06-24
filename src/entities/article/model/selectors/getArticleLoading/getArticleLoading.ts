import { StateSchema } from 'app/providers/store';

export const getArticleLoading = (state: StateSchema) =>
  state.article?.isLoading || false;
