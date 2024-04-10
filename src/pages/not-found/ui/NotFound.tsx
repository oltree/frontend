import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import classes from './NotFound.module.scss';

export const NotFound: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.wrapper)}>{t('page not found')}</div>
  );
});
