import { useTranslation } from 'react-i18next';

import { profileReducer } from 'entities/profile';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfileProps {
  className?: string;
}

const Profile = ({ className }: ProfileProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames('', {}, [className])}>{t('Profile')}</div>
    </DynamicModuleLoader>
  );
};

export default Profile;
