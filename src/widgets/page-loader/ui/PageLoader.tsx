import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/loader';

import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = memo(({ className }) => {
  return (
    <div
      data-testid='page-loader'
      className={classNames(classes.loader, {}, [className])}
    >
      <Loader />
    </div>
  );
});
