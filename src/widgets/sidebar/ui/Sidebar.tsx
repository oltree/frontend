import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { routePaths } from 'shared/config/routes/config';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button';
import { ButtonSize, ButtonTheme } from 'shared/ui/button/ui/Button';
import { CustomLink, CustomLinkTheme } from 'shared/ui/custom-link';

import { LanguageSwitcher } from 'widgets/language-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <Button
        square
        data-testid='sidebar-toggle-button'
        onClick={handleToggle}
        className={classes.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={classes.items}>
        <CustomLink
          theme={CustomLinkTheme.INVERTED}
          to={routePaths.main}
          className={classes.item}
        >
          <MainIcon className={classes.icon} />
          <span className={classes.link}>{t('Main')}</span>
        </CustomLink>
        <CustomLink
          theme={CustomLinkTheme.INVERTED}
          to={routePaths.about}
          className={classes.item}
        >
          <AboutIcon className={classes.icon} />
          <span className={classes.link}>{t('About us')}</span>
        </CustomLink>
      </div>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
});
