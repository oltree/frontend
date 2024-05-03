import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input/Input';

import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.loginForm, {}, [className])}>
      <Input autofocus type='text' placeholder={t('Enter login')} />
      <Input type='text' placeholder={t('Enter password')} />
      <Button>{t('Login')}</Button>
    </div>
  );
});
