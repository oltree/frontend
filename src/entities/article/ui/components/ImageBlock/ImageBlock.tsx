import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/text';

import { ArticleImageBlock } from '../../../model/types/articleSchema';

import classes from './ImageBlock.module.scss';

interface ImageBlockProps {
  block: ArticleImageBlock;
  className?: string;
}

export const ImageBlock: FC<ImageBlockProps> = memo(props => {
  const { className, block } = props;

  return (
    <div className={classNames('', {}, [className])}>
      <img src={block.src} alt={block.title} className={classes.img} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});
