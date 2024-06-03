import { ChangeEvent, FC, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = memo(props => {
  const { className, label, options, onChange, value, readonly } = props;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(
    () =>
      options?.map(opt => (
        <option className={classes.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  return (
    <div
      className={classNames(classes.wrapper, { [classes.readonly]: readonly }, [
        className,
      ])}
    >
      {label && <span className={classes.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        className={classes.select}
        value={value}
        onChange={handleChange}
      >
        {optionsList}
      </select>
    </div>
  );
});
