import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getLogin } from 'features/auth/model/selectors/getLogin/getLogin';
import { loginByUserName } from 'features/auth/model/services/loginByUserName/loginByUserName';
import { setPassword, setUserName } from 'features/auth/model/slice/login';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text, TextTheme } from 'shared/ui/text';

import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLogin);

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
  );
});
