import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/arrow.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container } from "./styles";

export default function PageHeader() {
  return (
    <>
      <Container>
        <Link to="/">
          <img src={arrow} alt="Back" />
          <span>Voltar</span>
        </Link>
        <h1>Olá getOperador</h1>
        <Input type="text" placeholder="cpf" />
        <Input type="text" placeholder="nome" />
        <Input type="text" placeholder="e-mail" />
        <Input type="password" placeholder="senha" />
        <Input type="password" placeholder="repetir senha" />
        <Button type="button">confirmar a senha</Button>
      </Container>
    </>
  );
}
