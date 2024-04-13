import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = memo(({ className }) => (
  <div
    data-testid='loader'
    className={classNames(classes.loader, {}, [className])}
  >
    <div />
    <div />
    <div />
    <div />
  </div>
));
