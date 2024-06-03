import { CSSProperties, FC, memo, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import classes from './Avatar.module.scss';

interface AvatarProps {
  src?: string;
  size?: number;
  alt?: string;
  className?: string;
}

export const Avatar: FC<AvatarProps> = memo(({ className, src, size, alt }) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(classes.wrapper, {}, [className])}
    />
  );
});
