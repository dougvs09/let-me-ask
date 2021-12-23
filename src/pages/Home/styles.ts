import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
`;

export const Aside = styled.aside`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #835afd;

  img {
    max-width: 320px;
    max-height: 403px;
    margin-left: 84px;
  }

  h1 {
    padding: 8px 0 0 84px;

    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    color: #fff;
  }

  p {
    padding: 16px 0 0 84px;

    font: 400 24px 'Roboto', sans-serif;
    line-height: 32px;
    color: #f8f8f8;
  }
`;

export const Main = styled.main`
  max-width: 380px;
  width: 100%;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  padding: 0 32px;

  img {
    width: 155px;
    height: 69px;
    align-self: center;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px 20px;
    margin-top: 70px;
    border: none;
    border-radius: 8px;

    font: 500 16px 'Roboto', sans-serif;
    background: #ea4335;
    color: #fefefe;
    cursor: pointer;

    transition: filter 0.2s;

    img {
      width: 24px;
      height: 24px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  span {
    display: flex;
    align-self: center;
    gap: 16px;
    margin: 32px 0;

    font: 14px 'Roboto', sans-serif;
    color: #a8a8b3;

    &::after,
    &::before {
      content: '';
      width: 67px;
      height: 1px;
      display: inline-block;
      align-self: center;

      background: #a8a8b3;
    }
  }

  form {
    input {
      width: 100%;
      padding: 15px 16px;
      border-radius: 8px;
      border: 2px solid #a8a8b3;

      font: 16px 'Roboto', sans-serif;
      color: #a8a8b3;

      &::placeholder {
        font: 16px 'Roboto', sans-serif;
        color: #a8a8b3;
      }
    }
  }
`;
