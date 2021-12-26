import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  @media (max-width: 460px) {
    flex-direction: column;

    > span {
      width: 260px;
      align-self: center;
    }
  }
`;

export const Logo = styled.div`
  img {
    width: 100px;
    height: 45px;
  }

  @media (max-width: 460px) {
    margin-bottom: 20px;
    align-self: center;
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

export const Form = styled.form`
  margin-top: 25px;

  textarea {
    border: none;
    resize: none;
    width: 100%;
    height: 120px;
    padding: 15px 15px;
    box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.2);

    background: #fff;

    &::placeholder {
      font: 16px 'Roboto', sans-serif;
      line-height: 24px;
      color: #737380;
    }
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  align-items: center;

  span {
    font: 14px 'Roboto', sans-serif;
    color: #737380;
  }

  > button {
    width: auto;
    margin-top: 0;
  }
`;

export const Redirect = styled(Link)`
  color: #835afd;
  border: none;
  background: none;

  text-decoration: underline;
  font: 14px 'Roboto', sans-serif;

  cursor: pointer;
`;

export const UserInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  p {
    font: 500 14px 'Roboto', sans-serif;
    color: #111;
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

export const LikeButton = styled.button`
  display: flex;
  gap: 5px;
  align-items: flex-end;
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    color: #737380;
  }

  &.liked {
    color: #845afd;

    svg path {
      stroke: #845afd;
    }
  }

  &:hover {
    svg path {
      stroke: #845afd;
    }
  }
`;
