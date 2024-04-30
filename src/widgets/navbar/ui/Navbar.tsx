import { FC, memo, useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import { ButtonTheme } from 'shared/ui/button/ui/Button';
import { Modal } from 'shared/ui/modal/ui/Modal';
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

      <Modal isOpen={isAuthModal} onClose={handleToggleModal}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptate
        in aliquid unde sapiente vero ducimus doloremque corporis, itaque neque
        eveniet. Sit numquam eligendi dolorem debitis, provident est recusandae
        enim!
      </Modal>
    </>
  );
});
