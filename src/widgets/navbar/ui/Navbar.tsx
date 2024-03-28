import { FC, memo } from 'react';

import { routePaths } from 'shared/config/routes/config';
import { classNames } from 'shared/lib/classNames';
import { CustomLink } from 'shared/ui/custom-link';
import { CustomLinkTheme } from 'shared/ui/custom-link/ui/CustomLink';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(props => {
  const { className } = props;

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <ThemeSwitcher />
      <CustomLink to={routePaths.main} theme={CustomLinkTheme.INVERTED}>
        MAIN
      </CustomLink>
      <CustomLink to={routePaths.about} theme={CustomLinkTheme.INVERTED}>
        ABOUT
      </CustomLink>
    </div>
  );
});
