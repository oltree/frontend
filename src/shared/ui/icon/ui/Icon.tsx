import { FC, SVGProps, VFC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Icon.module.scss';

interface IconProps {
  Svg: VFC<SVGProps<SVGSVGElement>>;
  className?: string;
}

export const Icon: FC<IconProps> = memo(props => {
  const { Svg, className } = props;

  return <Svg className={classNames(classes.root, {}, [className])} />;
});
