import { FC, memo } from 'react';

import { Theme, useTheme } from 'app/providers/theme';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { CustomButton } from 'shared/ui/custom-button';
import { CustomButtonTheme } from 'shared/ui/custom-button/ui/CustomButton';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(props => {
  const { className } = props;

  const { theme, onToggleTheme } = useTheme();

  return (
    <CustomButton
      theme={CustomButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={onToggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </CustomButton>
  );
});
