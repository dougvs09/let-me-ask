import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 25px 0;
  border-bottom: 2px solid #e2e2e2;
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  img {
    width: 100px;
    height: 45px;
  }

  @media (max-width: 600px) {
    align-self: center;
    margin-bottom: 20px;
  }
`;

export const RoomControlls = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  > button {
    width: auto;
    margin: 0;
    background: #fcfcfc;
    color: #835afd;
    border: 2px solid #835afd;
    border-radius: 10px;
    padding: 11px 25px;

    &:not(:disabled):hover {
      color: #835efc;
      border-color: #836cfd;
      filter: brightness(1);
    }
  }

  @media (max-width: 600px) {
    justify-content: space-between;
  }

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  max-width: 800px;
  padding: 0 20px;
  margin: 60px auto 0 auto;

  display: flex;
  flex-direction: column;

  > img {
    width: 284px;
    height: 243px;
    margin-top: 50px;
    align-self: center;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 15px;

  h2 {
    font: 700 24px 'Poppins', sans-serif;
  }

  span {
    padding: 10px 20px;
    border-radius: 20px;
    background: #e559f9;

    font: 500 14px 'Roboto', sans-serif;
    color: #fefefe;
  }

  @media (max-width: 460px) {
    flex-direction: column;

    span {
      width: 115px;
    }
  }
`;

export const QuestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 30px 0;

  overflow: auto;
`;

export const AdminControlls = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;

    &.isAnswered {
      svg path {
        stroke: #835afd;
      }
    }

    &.isHighlighted {
      svg circle {
        stroke: #835afd;
      }

      svg path {
        stroke: #835afd;
      }
    }

    &.isAnsweredHover {
      &:hover {
        svg path {
          stroke: #835afd;
        }
      }
    }

    &.delete {
      &:hover {
        svg path {
          stroke: #e73f5d;
        }
      }
    }

    &:nth-child(2) {
      &:hover {
        svg path {
          stroke: #835afd;
        }

        svg circle {
          stroke: #835afd;
        }
      }
    }
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    position: absolute;
    top: 25px;
    right: 30px;
    width: 24px;
    height: 24px;
    border: 0;
    background: transparent;

    cursor: pointer;
  }

  form {
    margin-top: 25px;

    textarea {
      border: none;
      resize: none;
      width: 400px;
      height: 150px;
      padding: 15px 15px;
      box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.2);

      background: #fff;
    }

    > button {
      width: auto;
      margin-top: 20px;
    }
  }
`;

export const ModalConfirm = styled.div`
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
