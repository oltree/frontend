export enum ArticleBlock {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlock;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlock.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlock.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlock.TEXT;
  paragraphs: string[];
  title?: string;
}

export type ArticleBlockType =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export enum Article {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: Article[];
  blocks: ArticleBlockType[];
}

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: IArticle;
}
