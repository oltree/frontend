import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';

import classes from './CustomLink.module.scss';

export enum CustomLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface CustomLinkProps extends LinkProps {
  className?: string;
  theme?: CustomLinkTheme;
}

export const CustomLink: FC<CustomLinkProps> = memo(props => {
  const {
    to,
    className,
    theme = CustomLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(classes.link, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
