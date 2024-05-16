import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { loginByUserName, setPassword, setUserName } from 'features/auth';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text, TextTheme } from 'shared/ui/text';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import loginReducer from '../../model/slice/login';

import classes from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  login: loginReducer,
};

interface LoginFormProps {
  onSuccess: () => void;
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ onSuccess, className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const handleChangeUserName = useCallback(
    (value: string) => {
      dispatch(setUserName(value));
    },
    [dispatch]
  );
  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(setPassword(value));
    },
    [dispatch]
  );
  const handleClickLogin = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(classes.loginForm, {}, [className])}>
        <Text title={t('Authorization')} />

        {error && <Text theme={TextTheme.ERROR} text={t(error)} />}

        <Input
          autofocus
          type='text'
          value={username}
          placeholder={t('Enter login')}
          onChange={handleChangeUserName}
        />
        <Input
          type='password'
          value={password}
          placeholder={t('Enter password')}
          onChange={handleChangePassword}
        />
        <Button
          disabled={isLoading}
          theme={ButtonTheme.OUTLINE}
          onClick={handleClickLogin}
        >
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
