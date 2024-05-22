import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileData } from 'entities/profile/model/selectors/getProfileData/getProfileData';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = memo(({ className }) => {
  const { t } = useTranslation('profile');
  const profileData = useSelector(getProfileData);

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <div className={classes.header}>
        <Text title={t('Profile')} />
        <Button className={classes.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Edit')}
        </Button>
      </div>
      <div className={classes.profile}>
        <Input value={profileData?.first} placeholder={t('First name')} />
        <Input value={profileData?.lastname} placeholder={t('Last name')} />
      </div>
    </div>
  );
});
