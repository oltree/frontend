import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export const enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = memo(props => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  return (
    <button
      type='button'
      className={classNames(
        classes.button,
        {
          [classes.square]: square,
        },
        [className, classes[theme], classes[size]]
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
});
