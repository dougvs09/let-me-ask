import styled from 'styled-components';

interface Props {
  isAnswered: boolean;
  isHighlighted: boolean;
}

export const QuestionItem = styled.li<Props>`
  width: 100%;
  padding: 25px;

  background: ${(props) =>
    props.isHighlighted && !props.isAnswered
      ? '#F4F0FF'
      : props.isAnswered
      ? '#DBDCDD'
      : '#FFF'};

  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.2);

  border-radius: 10px;
  border: ${(props) =>
    props.isHighlighted && !props.isAnswered ? '2px solid #835AFD' : ''};

  > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 25px;
  }

  > p {
    font: 16px/24px 'Roboto', sans-serif;
    color: #111;
  }
`;

export const QuestionUserInfo = styled.span<Props>`
  display: flex;
  align-items: center;
  gap: 10px;

  font: 14px 'Roboto', sans-serif;
  color: ${(props) =>
    props.isHighlighted && !props.isAnswered ? '#29292E' : '#737380'};

  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const LikeInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  p {
    font: 16px 'Poppins', sans-serif;
    color: #737380;
  }

  img {
    width: 24px;
    height: 24px;
    fill: #835afd;
  }
`;
