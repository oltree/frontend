import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const handleReloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <p>{t('something went wrong')}</p>
      <button onClick={handleReloadPage}>{t('reload page')}</button>
    </div>
  );
};
