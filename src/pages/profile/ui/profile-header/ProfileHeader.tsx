import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  cancelEdit,
  getProfileReadonly,
  setReadonly,
  updateProfileData,
} from 'entities/profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/button';
import { Text } from 'shared/ui/text';

import classes from './ProfileHeader.module.scss';

interface ProfileHeaderProps {
  className?: string;
}

export const ProfileHeader = ({ className }: ProfileHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const handleEdit = useCallback(() => {
    dispatch(setReadonly(false));
  }, [dispatch]);
  const handleCancelEdit = useCallback(() => {
    dispatch(cancelEdit());
  }, [dispatch]);
  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <Text title={t('Profile')} />
      {readonly ? (
        <Button theme={ButtonTheme.OUTLINE} onClick={handleEdit}>
          {t('Edit')}
        </Button>
      ) : (
        <div className={classes.wrapper}>
          <Button theme={ButtonTheme.OUTLINE_RED} onClick={handleCancelEdit}>
            {t('Cancel')}
          </Button>
          <Button theme={ButtonTheme.OUTLINE} onClick={handleSave}>
            {t('Save')}
          </Button>
        </div>
      )}
    </div>
  );
};
