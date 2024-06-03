import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from 'shared/types/enums/currency';
import { Select } from 'shared/ui/select';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo(props => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation();
  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      className={className}
      label={t('Select currency')}
      options={options}
      value={value}
      onChange={handleChange}
      readonly={readonly}
    />
  );
});
