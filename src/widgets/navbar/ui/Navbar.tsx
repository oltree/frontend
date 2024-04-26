import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation();

  return (
    <div
      data-testid='navbar'
      className={classNames(classes.navbar, {}, [className])}
    >
      /
    </div>
  );
});
