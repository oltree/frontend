import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Articles.module.scss';

interface ArticlesProps {
  className?: string;
}

const Articles: FC<ArticlesProps> = memo(props => {
  const { className } = props;

  return <div className={classNames(classes.root, {}, [className])} />;
});

export default Articles;
