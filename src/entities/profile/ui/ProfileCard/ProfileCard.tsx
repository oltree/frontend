import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect } from 'entities/country';
import { CurrencySelect } from 'entities/currency';
import { IProfile } from 'entities/profile/model/types/profileSchema';
import { classNames } from 'shared/lib/classNames/classNames';
import { Country } from 'shared/types/enums/country';
import { Currency } from 'shared/types/enums/currency';
import { Avatar } from 'shared/ui/avatar';
import { Input } from 'shared/ui/input';
import { Loader } from 'shared/ui/loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/text';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: IProfile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = memo(props => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(classes.wrapper, {}, [
          className,
          classes.loading,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(classes.wrapper, {}, [className, classes.error])}
      >
        <Text
          text={t('Error')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      {data?.avatar && (
        <div className={classes.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </div>
      )}
      <Input
        value={data?.first}
        placeholder={t('First name')}
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Last name')}
        className={classes.input}
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder={t('Age')}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('Town')}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('User name')}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Avatar')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={classes.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </div>
  );
});
