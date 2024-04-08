import { FC, memo, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/theme-switcher';

import { LanguageSwitcher } from 'widgets/language-switcher/ui/LanguageSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(props => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <button type='button' onClick={handleToggle}>
        Toggle
      </button>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
});
