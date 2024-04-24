import { FC, memo } from 'react';

import { routePaths } from 'shared/config/routes/config';
import { classNames } from 'shared/lib/classNames/classNames';
import { CustomLink } from 'shared/ui/custom-link';
import { CustomLinkTheme } from 'shared/ui/custom-link/ui/CustomLink';

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
      <CustomLink to={routePaths.main} theme={CustomLinkTheme.INVERTED}>
        {t('Main')}
      </CustomLink>
      <CustomLink to={routePaths.about} theme={CustomLinkTheme.INVERTED}>
        {t('About')}
      </CustomLink>
    </div>
  );
});
