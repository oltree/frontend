import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/auth-by-username';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button';
import { ButtonTheme } from 'shared/ui/button/ui/Button';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <>
      <div
        data-testid='navbar'
        className={classNames(classes.navbar, {}, [className])}
      >
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleToggleModal}>
          {t('Login')}
        </Button>
      </div>

      <LoginModal isOpen={isAuthModal} onClose={handleToggleModal} />
    </>
  );
});
