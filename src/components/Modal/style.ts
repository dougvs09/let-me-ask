import { keyframes } from 'styled-components';
import styled from 'styled-components';

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const showModal = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -200px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const ModalWrapper = styled.div`
  width: 590px;
  height: 362px;
  padding: 64px 0;
  position: relative;
  z-index: 1000;
  border-radius: 10px;
  background: #fff;

  animation: ${showModal} 0.6s forwards;
`;
