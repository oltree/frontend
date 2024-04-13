import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = memo(props => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      type='button'
      className={classNames(classes.button, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
