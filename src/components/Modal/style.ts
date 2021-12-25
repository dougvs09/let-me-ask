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

export const ModalWrapper = styled.div`
  width: 590px;
  height: 362px;
  padding: 64px 0;
  position: relative;
  z-index: 1000;
  border-radius: 10px;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    margin-bottom: 24px;
  }

  h2 {
    font: 700 24px/34px 'Poppins', sans-serif;
    margin-bottom: 12px;
  }

  p {
    font: 16px 'Roboto', sans-serif;
    color: #737380;
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    gap: 10px;

    button {
      width: auto;

      &:nth-child(1) {
        background: #dbdcdd;
        color: #737380;
        font: 500 16px 'Roboto', sans-serif;
        padding: 0 30px;
      }
      &:nth-child(2) {
        background: #e73f5d;
        color: #fff;
        font: 500 16px 'Roboto', sans-serif;
      }
    }
  }
`;
