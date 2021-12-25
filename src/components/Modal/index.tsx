import { ReactNode } from 'react';

import { BackgroundModal, ModalWrapper } from './style';

import dangerImg from '../../assets/images/danger.svg';

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <BackgroundModal>
      <ModalWrapper>
        <img src={dangerImg} alt="danger icon" />
        <h2>Encerrar sala</h2>
        <p>Tem certeza que deseja encerrar esta sala?</p>
        <div>{children}</div>
      </ModalWrapper>
    </BackgroundModal>
  );
};
