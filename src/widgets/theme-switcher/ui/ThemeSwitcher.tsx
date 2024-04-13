import { FC, memo } from 'react';

import { Theme, useTheme } from 'app/providers/theme';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button';
import { ButtonTheme } from 'shared/ui/button/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(props => {
  const { className } = props;

  const { theme, onToggleTheme } = useTheme();

  return (
    <Button
      data-testid='theme-switcher'
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={onToggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
