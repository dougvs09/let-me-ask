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

  div {
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
  }
`;

export const Logo = styled.div`
  img {
    width: 100px;
    height: 45px;
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

      &:hover {
        svg path {
          stroke: #835afd;
        }
      }
    }

    &.isHighlighted {
      svg circle {
        stroke: #835afd;
      }

      svg path {
        stroke: #835afd;
      }

      &:hover {
        svg circle {
          stroke: #835afd;
        }

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
  }
`;
