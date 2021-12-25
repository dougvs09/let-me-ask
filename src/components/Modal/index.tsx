import { ReactNode } from 'react';

import { BackgroundModal, ModalWrapper } from './style';

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <BackgroundModal>
      <ModalWrapper>{children}</ModalWrapper>
    </BackgroundModal>
  );
};
