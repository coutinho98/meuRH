import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Admin() {
  return (
    <>
    <Link to="/adminPassword">
      <Button>Trocar Senha sem Autenticação</Button>
    </Link>
      <Button>Desbloquear Usuário</Button>
      <Button>Bloquear Usuário</Button>
      <Button>Criar Usuário</Button>
    </>
  );
}
