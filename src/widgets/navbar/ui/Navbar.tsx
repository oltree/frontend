import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { getUser, logout } from 'entities/user';
import { LoginModal } from 'features/auth';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/button';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUser);
  const dispatch = useDispatch();

  const handleToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);
  const handleClickLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <>
      <div
        data-testid='navbar'
        className={classNames(classes.navbar, {}, [className])}
      >
        {authData ? (
          <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={handleClickLogout}
          >
            {t('Logout')}
          </Button>
        ) : (
          <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={handleToggleModal}
          >
            {t('Login')}
          </Button>
        )}
      </div>

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={handleToggleModal} />
      )}
    </>
  );
});
