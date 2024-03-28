import { FC, memo, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';

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
      <button onClick={handleToggle}>Toggle</button>

      <div className={classes.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
});
