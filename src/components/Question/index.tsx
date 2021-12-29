import {
  QuestionItem,
  QuestionUserInfo,
  Response,
  InfoContainer,
} from './style';
import { ReactNode } from 'react';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  response: string | undefined;
  children: ReactNode;
  isHighlighted: boolean;
  isAnswered: boolean;
};

export const Question = ({
  content,
  author,
  children,
  response,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) => {
  return (
    <QuestionItem isAnswered={isAnswered} isHighlighted={isHighlighted}>
      <p>{content}</p>
      <InfoContainer>
        <QuestionUserInfo isHighlighted={isHighlighted} isAnswered={isAnswered}>
          <img src={author.avatar} alt="user icon" />
          <p>{author.name}</p>
        </QuestionUserInfo>
        {children}
      </InfoContainer>
      {response && (
        <Response>
          <h2>Resposta</h2>
          <p>{response}</p>
        </Response>
      )}
    </QuestionItem>
  );
};
