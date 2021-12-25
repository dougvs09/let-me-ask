import { QuestionItem, QuestionUserInfo } from './style';
import { ReactNode } from 'react';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
};

export const Question = ({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) => {
  return (
    <QuestionItem isAnswered={isAnswered} isHighlighted={isHighlighted}>
      <p>{content}</p>
      <div>
        <QuestionUserInfo isHighlighted={isHighlighted} isAnswered={isAnswered}>
          <img src={author.avatar} alt="user icon" />
          <p>{author.name}</p>
        </QuestionUserInfo>
        {children}
      </div>
    </QuestionItem>
  );
};
