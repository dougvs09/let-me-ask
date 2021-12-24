import { Link, useNavigate } from 'react-router-dom';

import { FormEvent, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';

import { database } from '../../services/firebase';

import { Aside, Container, Main } from './styles';
import { Button } from '../../components/Button';
import illustrationImg from '../../assets/images/illustration.svg';
import logoLetMeAsk from '../../assets/images/logo.svg';

export const NewRoom = () => {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');
  const navigate = useNavigate();

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    navigate(`/rooms/${firebaseRoom.key}`);
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
        <h2>Crie uma nova sala</h2>
        <form onSubmit={handleCreateRoom}>
          <input
            type="text"
            placeholder="Nome da sala"
            onChange={(event) => setNewRoom(event.target.value)}
            value={newRoom}
          />
          <Button type="submit">Criar sala</Button>
        </form>
        <span>
          Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
        </span>
      </Main>
    </Container>
  );
};
