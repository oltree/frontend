import { ButtonHTMLAttributes, FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './CustomButton.module.scss';

export enum CustomButtonTheme {
  CLEAR = 'clear',
}

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: CustomButtonTheme;
}

export const CustomButton: FC<CustomButtonProps> = memo(props => {
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
