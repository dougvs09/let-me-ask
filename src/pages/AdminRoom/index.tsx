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
} from './styles';

import { RoomCode } from '../../components/RoomCode/index';
import { Button } from '../../components/Button/index';
import { Question } from '../../components/Question';

import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';
import logoLetMeAsk from '../../assets/images/logo.svg';
import emptyIcon from '../../assets/images/empty-questions.svg';

type ParamsProps = {
  id: string;
};

export const AdminRoom = () => {
  const params = useParams<ParamsProps>();
  const roomId = params.id;
  const navigate = useNavigate();

  const { questions, title } = useRoom(roomId!);

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
      toast.success('Question deleted');
    }
  };

  const handleEndRoom = async () => {
    await database.ref(`/rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    navigate('/');
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo>
            <img src={logoLetMeAsk} alt="Logo Let Me Ask" />
          </Logo>
          <div>
            <RoomCode code={roomId!} />
            <Button onClick={handleEndRoom}>Encerrar sala</Button>
          </div>
        </HeaderContainer>
      </Header>
      <Main>
        <Title>
          <h2>{title}</h2>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </Title>
        {questions ? (
          <QuestionsList>
            {questions.map((question) => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                >
                  <AdminControlls>
                    <button>
                      <img src={answerImg} alt="answer icon" />
                    </button>
                    <button>
                      <img src={checkImg} alt="check icon" />
                    </button>
                    <button onClick={() => handleDeleteQuestion(question.id)}>
                      <img src={deleteImg} alt="delete icon" />
                    </button>
                  </AdminControlls>
                </Question>
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
