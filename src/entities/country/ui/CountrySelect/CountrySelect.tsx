import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from 'shared/types/enums/country';
import { Select } from 'shared/ui/select';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect: FC<CountrySelectProps> = memo(props => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation();
  const handleChange = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      className={className}
      label={t('Select country')}
      options={options}
      value={value}
      onChange={handleChange}
      readonly={readonly}
    />
  );
});
