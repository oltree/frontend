import { FC, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/code';

import { ArticleCodeBlock } from '../../../model/types/articleSchema';

import classes from './CodeBlock.module.scss';

interface CodeBlockProps {
  block: ArticleCodeBlock;
  className?: string;
}

export const CodeBlock: FC<CodeBlockProps> = memo(props => {
  const { className, block } = props;

  return (
    <div className={classNames(classes.root, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
