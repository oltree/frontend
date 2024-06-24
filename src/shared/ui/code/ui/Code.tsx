import { FC, memo, useCallback } from 'react';

import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/button';

import classes from './Code.module.scss';

interface CodeProps {
  text: string;
  className?: string;
}

export const Code: FC<CodeProps> = memo(props => {
  const { text, className } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(classes.root, {}, [className])}>
      <Button
        onClick={onCopy}
        className={classes.copyBtn}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={classes.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
