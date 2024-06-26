import { memo, useCallback, useEffect } from 'react';

import {
  ProfileCard,
  ValidateProfileError,
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileReducer,
  updateProfile,
} from 'entities/profile';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Country } from 'shared/types/enums/country';
import { Currency } from 'shared/types/enums/currency';

import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/text';
import { ProfileHeader } from './profile-header/ProfileHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfileProps {
  className?: string;
}

const Profile = memo(({ className }: ProfileProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: 'Server error',
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Invalid region'),
    [ValidateProfileError.NO_DATA]: t('Data not provided'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      'First and last name are required'
    ),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const handleChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ first: value || '' }));
    },
    [dispatch]
  );
  const handleChangeLastname = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );
  const handleChangeCity = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ city: value || '' }));
    },
    [dispatch]
  );
  const handleChangeAge = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ age: Number(value) || 0 }));
    },
    [dispatch]
  );
  const handleChangeUsername = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ username: value || '' }));
    },
    [dispatch]
  );
  const handleChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );
  const handleChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(updateProfile({ currency }));
    },
    [dispatch]
  );
  const handleChangeCountry = useCallback(
    (country: Country) => {
      dispatch(updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames('page', {}, [className])}>
        <ProfileHeader />
        {validateErrors?.length &&
          validateErrors.map(error => (
            <Text
              key={error}
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[error]}
            />
          ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={handleChangeFirstname}
          onChangeLastname={handleChangeLastname}
          onChangeAge={handleChangeAge}
          onChangeCity={handleChangeCity}
          onChangeUsername={handleChangeUsername}
          onChangeAvatar={handleChangeAvatar}
          onChangeCurrency={handleChangeCurrency}
          onChangeCountry={handleChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default Profile;
