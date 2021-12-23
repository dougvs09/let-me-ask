import { useParams } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';

import {
  Header,
  HeaderContainer,
  Logo,
  Main,
  Title,
  FormFooter,
  UserInfo,
  QuestionsList,
  QuestionUserInfo,
  LikeInfo,
} from './styles';
import { RoomCode } from '../../components/RoomCode/index';
import { Button } from './../../components/Button/index';

import logoLetMeAsk from '../../assets/images/logo.svg';
import emptyIcon from '../../assets/images/empty-questions.svg';
import likeIcon from '../../assets/images/like.svg';

type ParamsProps = {
  id: string;
};

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
  }
>;

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isHighlighted: boolean;
  isAnswered: boolean;
};

export const Room = () => {
  const params = useParams<ParamsProps>();
  const roomId = params.id;

  const { user } = useAuth();

  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestion = Object.entries(firebaseQuestions).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          };
        }
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestion);
    });
  }, [roomId]);

  const handleNewQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('User not authenticated');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
    toast.success('Question sent successfully!');
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo>
            <img src={logoLetMeAsk} alt="Logo Let Me Ask" />
          </Logo>
          <RoomCode code={roomId!} />
        </HeaderContainer>
      </Header>
      <Main>
        <Title>
          <h2>{title}</h2>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </Title>
        <form onSubmit={handleNewQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <FormFooter>
            {user ? (
              <UserInfo>
                <img src={user.avatar} alt="user icon" />
                <p>{user.name}</p>
              </UserInfo>
            ) : (
              <span>
                Para enviar sua pergunta, <button>faça seu login</button>
              </span>
            )}
            <Button disabled={!user}>Enviar pergunta</Button>
          </FormFooter>
        </form>
        {questions ? (
          <QuestionsList>
            {questions.map((question) => {
              return (
                <li key={question.id}>
                  <p>{question.content}</p>
                  <div>
                    <QuestionUserInfo>
                      <img src={question.author.avatar} alt="user icon" />
                      <p>{question.author.name}</p>
                    </QuestionUserInfo>
                    <LikeInfo>
                      <p>12</p>
                      <img src={likeIcon} alt="like icon" />
                    </LikeInfo>
                  </div>
                </li>
              );
            })}
          </QuestionsList>
        ) : (
          <img src={emptyIcon} alt="Empty Icon" />
        )}
      </Main>
      <Toaster />
    </>
  );
};
