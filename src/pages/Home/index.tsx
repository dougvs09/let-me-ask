import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';

import { Container, Aside, Main } from './styles';
import { Button } from './../../components/Button/index';
import logoLetMeAsk from '../../assets/images/logo.svg';
import googleIcon from '../../assets/images/google-icon.svg';
import illustrationImg from '../../assets/images/illustration.svg';

export const Home = () => {
  const navigate = useNavigate();
  const { user, loginWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const handleCreateRoom = async () => {
    if (!user) {
      await loginWithGoogle();
    }

    navigate('/rooms/new');
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error('Room do not exists!');
      return;
    }

    if (roomRef.val().endedAt) {
      toast.error('Room closed!');
      return;
    }

    if (roomRef.val().authorId === user?.id) {
      navigate(`/admin/rooms/${roomCode}`);
    } else {
      navigate(`/rooms/${roomCode}`);
    }
  };

  return (
    <Container>
      <Aside>
        <img src={illustrationImg} alt="Background illustration" />
        <h1>Crie salas de Q&amp;A ao-vivo</h1>
        <p>Tira suas dúvidas em tempo real</p>
      </Aside>
      <Main>
        <img src={logoLetMeAsk} alt="Logo Let Me Ask" />
        <button onClick={handleCreateRoom}>
          <img src={googleIcon} alt="Google Icon" />
          Crie sua sala com o google
        </button>
        <span>ou entre em uma sala</span>
        <form onSubmit={handleJoinRoom}>
          <input
            type="text"
            placeholder="Digite o código da sala"
            onChange={(event) => setRoomCode(event.target.value)}
            value={roomCode}
          />
          <Button type="submit">Entrar na sala</Button>
        </form>
      </Main>
      <Toaster />
    </Container>
  );
};
