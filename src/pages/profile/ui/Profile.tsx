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
  /* const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]); */

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        {/* <ProfileCard /> */}
      </div>
    </DynamicModuleLoader>
  );
};

export default Profile;
