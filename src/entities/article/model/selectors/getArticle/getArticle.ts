import { StateSchema } from 'app/providers/store';

export const getArticle = (state: StateSchema) => state.article?.data;
