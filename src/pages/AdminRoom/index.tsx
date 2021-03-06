import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { useRoom } from '../../hooks/useRoom';

import { database } from '../../services/firebase';

import {
  Header,
  HeaderContainer,
  Logo,
  Main,
  Title,
  QuestionsList,
  AdminControlls,
  RoomControlls,
  ModalConfirm,
  ModalContainer,
} from './styles';

import { RoomCode } from '../../components/RoomCode';
import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { Modal } from '../../components/Modal';

import logoLetMeAsk from '../../assets/images/logo.svg';
import emptyIcon from '../../assets/images/empty-questions.svg';
import dangerImg from '../../assets/images/danger.svg';
import xImg from '../../assets/images/x.svg';

type ParamsProps = {
  id: string;
};

export const AdminRoom = () => {
  const params = useParams<ParamsProps>();
  const navigate = useNavigate();

  const roomId = params.id;

  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalResponse, setModaResponse] = useState(false);

  const [response, setResponse] = useState('');

  const { questions, title } = useRoom(roomId!);

  const handleEndRoom = async () => {
    await database.ref(`/rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    navigate('/');
  };

  const handleDeleteQuestion = async (questionId: string) => {
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
    toast.success('Question deleted');
  };

  const handleAnswerQuestion = async (questionId: string, event: FormEvent) => {
    event.preventDefault();

    if (response.trim() === '') {
      return;
    }

    await database
      .ref(`/rooms/${roomId}/questions/${questionId}/response`)
      .set(response);

    await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });

    toast.success('Response sent successfully!');
    setModaResponse(false);
    setResponse('');
  };

  const handleHighlightQuestion = async (questionId: string) => {
    await database.ref(`/rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo>
            <img src={logoLetMeAsk} alt="Logo Let Me Ask" />
          </Logo>
          <RoomControlls>
            <RoomCode code={roomId!} />
            <Button onClick={() => setModalConfirm(true)}>Encerrar sala</Button>
          </RoomControlls>
        </HeaderContainer>
      </Header>
      <Main>
        <Title>
          <h2>Sala {title}</h2>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </Title>
        {questions.length > 0 ? (
          <QuestionsList>
            {questions.map((question) => (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
                response={question.response}
              >
                <AdminControlls>
                  {!question.isAnswered && (
                    <>
                      <button
                        className={
                          question.isAnswered ? 'isAnswered' : 'isAnsweredHover'
                        }
                        onClick={() => setModaResponse(true)}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z"
                            stroke="#737380"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <button
                        className={
                          question.isHighlighted ? 'isHighlighted' : ''
                        }
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12.0003"
                            cy="11.9998"
                            r="9.00375"
                            stroke="#737380"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193"
                            stroke="#737380"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                  <button
                    className="delete"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5.99988H5H21"
                        stroke="#737380"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
                        stroke="#737380"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </AdminControlls>
                {modalResponse && (
                  <Modal>
                    <ModalContainer>
                      <button onClick={() => setModaResponse(false)}>
                        <img src={xImg} alt="close icon" />
                      </button>
                      <form
                        onSubmit={(event) => {
                          handleAnswerQuestion(question.id, event);
                        }}
                      >
                        <textarea
                          onChange={(event) => setResponse(event.target.value)}
                          value={response}
                          placeholder="Escreva a resposta aqui"
                        />
                        <Button>Enviar resposta</Button>
                      </form>
                    </ModalContainer>
                  </Modal>
                )}
              </Question>
            ))}
          </QuestionsList>
        ) : (
          <img src={emptyIcon} alt="Empty Icon" />
        )}
      </Main>
      <Toaster />
      {modalConfirm ? (
        <Modal>
          <ModalConfirm>
            <img src={dangerImg} alt="danger icon" />
            <h2>Encerrar sala</h2>
            <p>Tem certeza que deseja encerrar esta sala?</p>
            <div>
              <Button onClick={() => setModalConfirm(false)}>Cancelar</Button>
              <Button onClick={handleEndRoom}>Sim, encerrar</Button>
            </div>
          </ModalConfirm>
        </Modal>
      ) : (
        ''
      )}
    </>
  );
};
