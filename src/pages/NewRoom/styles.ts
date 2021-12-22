import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
`

export const Aside = styled.aside`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #835AFD;

  img {
    max-width: 320px;
    max-height: 403px;
    margin-left: 84px;
  }

  h1 {
    padding: 8px 0 0 84px;

    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    color: #FFF;
  }

  p {
    padding: 16px 0 0 84px;

    font: 400 24px 'Roboto', sans-serif;
    line-height: 32px;
    color: #F8F8F8;
  }
`
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
      border: 2px solid #A8A8B3;

      font: 16px 'Roboto', sans-serif;
      color: #A8A8B3;

      &::placeholder {
        font: 16px 'Roboto', sans-serif;
        color: #A8A8B3;
      }
    }
  }

  span {
    font: 14px 'Roboto', sans-serif;
    color: #737380;
    margin-top: 16px;

    a {
      color: #E559F9;
    }
  }
`
