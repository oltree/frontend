import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames';

import classes from './CustomButton.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const CustomButton: FC<CustomButtonProps> = memo(props => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(classes.button, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
