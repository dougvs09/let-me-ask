import styled from "styled-components";

export const ButtonComponent = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 20px;
  margin-top: 16px;
  border: none;
  border-radius: 8px;

  font: medium 16px 'Roboto', sans-serif;
  background: #835AFD;
  color: #FEFEFE;
  cursor: pointer;

  transition: filter 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
