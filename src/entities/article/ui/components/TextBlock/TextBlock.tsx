import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/text';

import { ArticleTextBlock } from '../../../model/types/articleSchema';

import classes from './TextBlock.module.scss';

interface TextBlockProps {
  block: ArticleTextBlock;
  className?: string;
}

export const TextBlock: FC<TextBlockProps> = memo(props => {
  const { className, block } = props;

  return (
    <div className={classNames('', {}, [className])}>
      {block.title && <Text title={block.title} className={classes.title} />}
      {block.paragraphs.map(paragraph => (
        <Text key={paragraph} text={paragraph} className={classes.paragraph} />
      ))}
    </div>
  );
});
