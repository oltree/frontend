import { FC, Suspense, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Loader } from 'shared/ui/loader';
import { Modal } from 'shared/ui/modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
});
