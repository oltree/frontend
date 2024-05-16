import { FC, memo, useMemo, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button';
import { ButtonSize, ButtonTheme } from 'shared/ui/button/ui/Button';
import { LanguageSwitcher } from 'widgets/language-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';

import { itemsList } from '../model/items';

import classes from './Sidebar.module.scss';
import { Item } from './item';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(prev => !prev);
  };

  const renderItems = useMemo(
    () =>
      itemsList.map(item => (
        <Item key={item.path} item={item} collapsed={collapsed} />
      )),
    [collapsed]
  );

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

      <div className={classes.items}>{renderItems}</div>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
});
