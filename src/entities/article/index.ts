import articleReducer from './model/slice/article';

export type {
  ArticleDetailsSchema,
  IArticle,
} from './model/types/articleSchema';
export { Article } from './ui/Article';

export { articleReducer };
