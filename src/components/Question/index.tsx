import { QuestionItem, QuestionUserInfo } from './style';
import { ReactNode } from 'react';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children: ReactNode;
};

export const Question = ({ content, author, children }: QuestionProps) => {
  return (
    <QuestionItem>
      <p>{content}</p>
      <div>
        <QuestionUserInfo>
          <img src={author.avatar} alt="user icon" />
          <p>{author.name}</p>
        </QuestionUserInfo>
        {children}
      </div>
    </QuestionItem>
  );
};
