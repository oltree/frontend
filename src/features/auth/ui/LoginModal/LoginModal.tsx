import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/modal';

import { LoginForm } from '../LoginForm/LoginForm';

import classes from './LoginModal.module.scss';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = memo(props => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal
      lazy
      className={classNames(classes.loginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
});
