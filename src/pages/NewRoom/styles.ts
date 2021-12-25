import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: 900px) {
    img {
      max-width: 200px;
      margin-left: 50px;
    }

    h1 {
      font-size: 24px;
      padding-left: 50px;
    }

    p {
      font-size: 16px;
      padding-left: 50px;
    }
  }

  @media (max-width: 600px) {
    height: auto;
    padding: 40px 0;

    img {
      max-width: 250px;
      margin-left: 50px;
    }

    h1 {
      font-size: 28px;
      padding-left: 50px;
    }

    p {
      font-size: 16px;
      padding-left: 50px;
    }
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
    margin-bottom: 56px;
  }

  h2 {
    font: 700 24px 'Poppins', sans-serif;
    text-align: center;
    margin-bottom: 24px;
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

  span {
    font: 14px 'Roboto', sans-serif;
    color: #737380;
    margin-top: 16px;

    a {
      color: #e559f9;
    }
  }

  @media (max-width: 600px) {
    padding: 40px 32px;
  }
`;
