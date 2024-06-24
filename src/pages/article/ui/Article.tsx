import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Article as ArticleDetails } from 'entities/article';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleProps {
  className?: string;
}

const Article: FC<ArticleProps> = memo(props => {
  const { className } = props;

  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  return (
    <div className={classNames('page', {}, [className])}>
      {id ? <ArticleDetails id={id} /> : t('Article not found')}
    </div>
  );
});

export default Article;
