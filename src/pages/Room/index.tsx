import { useParams } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';

import {
  Header,
  HeaderContainer,
  Logo,
  Main,
  Title,
  Form,
  FormFooter,
  UserInfo,
  QuestionsList,
  LikeButton,
} from './styles';
import { RoomCode } from '../../components/RoomCode/index';
import { Button } from '../../components/Button';

import logoLetMeAsk from '../../assets/images/logo.svg';
import emptyIcon from '../../assets/images/empty-questions.svg';
import { Question } from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';

type ParamsProps = {
  id: string;
};

export const Room = () => {
  const params = useParams<ParamsProps>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');

  const { questions, title } = useRoom(roomId!);
  const { user } = useAuth();

  const handleNewQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      toast.error('User do not authenticated!');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
    toast.success('Question sent successfully!');
  };

  const handleLikeQuestion = async (
    questionId: string,
    likeId: string | undefined
  ) => {
    if (likeId) {
      await database
        .ref(`/rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database
        .ref(`/rooms/${roomId}/questions/${questionId}/likes/`)
        .push({
          authorId: user?.id,
        });
    }
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
          <h2>Sala {title}</h2>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </Title>
        <Form onSubmit={handleNewQuestion}>
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
        </Form>
        {questions ? (
          <QuestionsList>
            {questions.map((question) => (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                response={question.response}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <LikeButton
                    className={question.likeId ? 'liked' : ''}
                    onClick={() => {
                      handleLikeQuestion(question.id, question.likeId);
                    }}
                  >
                    {question.likeCount > 0 && (
                      <span>{question.likeCount}</span>
                    )}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                        stroke="#737380"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </LikeButton>
                )}
              </Question>
            ))}
          </QuestionsList>
        ) : (
          <img src={emptyIcon} alt="Empty Icon" />
        )}
      </Main>
      <Toaster />
    </>
  );
};
