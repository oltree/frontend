import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { loginByUserName, setPassword, setUserName } from 'features/auth';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader';
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
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
  const handleClickLogin = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, username, password]);

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
