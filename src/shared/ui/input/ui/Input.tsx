import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  value?: string | number;
  autofocus?: boolean;
  className?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(props => {
  const {
    value,
    type = 'text',
    autofocus,
    className,
    placeholder,
    readonly,
    onChange,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div
      className={classNames(
        classes.inputWrapper,
        { [classes.readonly]: readonly },
        [className]
      )}
    >
      {placeholder && (
        <p className={classes.placeholder}>{`${placeholder} >`}</p>
      )}
      <div className={classes.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          readOnly={readonly}
          className={classes.input}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onSelect={handleSelect}
          onChange={handleChange}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={classes.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
