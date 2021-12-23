import styled from 'styled-components';

export const Code = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid #835afd;
  border-radius: 11px;
  padding-right: 10px;

  font: 500 14px 'Roboto', sans-serif;

  button {
    border: none;
    padding: 11px;
    border-radius: 8px 0 0 8px;
    background: #835afd;

    cursor: pointer;

    transition: 0.3s;

    img {
      width: 20px;
      height: 20px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
