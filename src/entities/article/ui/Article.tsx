import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/avatar';
import { Icon } from 'shared/ui/icon';
import { Skeleton } from 'shared/ui/skeleton';
import { Text, TextAlign } from 'shared/ui/text';
import { TextSize } from 'shared/ui/text/ui/Text';

import { getArticle } from '../model/selectors/getArticle/getArticle';
import { getArticleError } from '../model/selectors/getArticleError/getArticleError';
import { getArticleLoading } from '../model/selectors/getArticleLoading/getArticleLoading';
import { fetchArticleById } from '../model/services/fetchArticleById/fetchArticleById';
import articleReducer from '../model/slice/article';
import { ArticleBlock, ArticleBlockType } from '../model/types/articleSchema';
import { CodeBlock, ImageBlock, TextBlock } from './components';

import classes from './Article.module.scss';

interface ArticleProps {
  id: string;
  className?: string;
}

const reducers: ReducersList = {
  article: articleReducer,
};

export const Article: FC<ArticleProps> = memo(props => {
  const { id, className } = props;

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleLoading);
  const article = useSelector(getArticle);
  const error = useSelector(getArticleError);

  const renderBlock = useCallback((block: ArticleBlockType) => {
    switch (block.type) {
      case ArticleBlock.CODE:
        return (
          <CodeBlock key={block.id} block={block} className={classes.block} />
        );
      case ArticleBlock.IMAGE:
        return (
          <ImageBlock key={block.id} block={block} className={classes.block} />
        );
      case ArticleBlock.TEXT:
        return (
          <TextBlock key={block.id} className={classes.block} block={block} />
        );
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={classes.avatar}
          width={200}
          height={200}
          border='50%'
        />
        <Skeleton className={classes.title} width={300} height={32} />
        <Skeleton className={classes.skeleton} width={600} height={24} />
        <Skeleton className={classes.skeleton} width='100%' height={200} />
        <Skeleton className={classes.skeleton} width='100%' height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('There was an error loading the article')}
      />
    );
  } else {
    content = (
      <>
        <div className={classes.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={classes.avatar} />
        </div>
        <Text
          className={classes.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={classes.articleInfo}>
          <Icon className={classes.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={classes.articleInfo}>
          <Icon className={classes.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(classes.root, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
