import { Link } from "react-router-dom"

import { Aside, Container, Main } from "./styles"
import { Button } from "../../components/Button"
import illustrationImg from '../../assets/images/illustration.svg'
import logoLetMeAsk from '../../assets/images/logo.svg'

export const NewRoom = () => {
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
        <form>
          <input
            type="text"
            placeholder="Nome da sala"
          />
          <Button type="submit">
            Criar sala
          </Button>
        </form>
        <span>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></span>
      </Main>
    </Container>
  )
}
