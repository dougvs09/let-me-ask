import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import logoLetMeAsk from '../../assets/images/logo.svg'
import googleIcon from '../../assets/images/google-icon.svg'
import illustrationImg from '../../assets/images/illustration.svg'
import { Container, Aside, Main } from './styles';
import { Button } from './../../components/Button/index';


export const Home = () => {

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
        <form>
          <input
            type="text"
            placeholder="Digite o código da sala"
          />
          <Button type="submit">
            Entrar na sala
          </Button>
        </form>
      </Main>
    </Container>
  )
}
