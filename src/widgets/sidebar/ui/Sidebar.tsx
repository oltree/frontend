import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button';
import { LanguageSwitcher } from 'widgets/language-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';

import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(props => {
  const { className } = props;

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
      <Button data-testid='sidebar-toggle-button' onClick={handleToggle}>
        {t('Hide')}
      </Button>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
});
