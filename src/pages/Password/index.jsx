import React, { useState } from "react";

import { Container } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Password() {
  const [step, setStep] = useState(false);
  const [cpf, setCpf] = useState("");
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [repeatSenha, setRepeatSenha] = useState("");

  async function validate() {
    if (setCpf === cpf && setMatricula === matricula) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({ cpf, matricula }),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
    }
  }

  async function changePassword() {
    if (senha === repeatSenha) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts${senha}`,
        {
          method: "PUT",
          body: JSON.stringify({ senha }),
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  const changePage = () => setStep((step) => !step);

  return (
    <>
      <Container>
        <h1>Olá Employee</h1>
        {!step && (
          <>
            <Input
              type="number"
              placeholder="cpf*"
              onChange={(e) => setCpf(e.target.value)}
            />
            <Input
              type="tel"
              placeholder="matricula*"
              onChange={(e) => setMatricula(e.target.value)}
            />
            <Button
              type="button"
              onClick={() => {
                validate();
                changePage();
              }}
            >
              Avançar
            </Button>
          </>
        )}
        {step && (
          <>
            <Input
              type="password"
              placeholder="senha"
              onChange={(e) => setSenha(e.target.value)}
            />
            <Input
              type="password"
              placeholder="repetir senha"
              onChange={(e) => setRepeatSenha(e.target.value)}
            />
            <Button type="button" onClick={changePassword}>
              Confirmar a Senha
            </Button>
          </>
        )}
      </Container>
    </>
  );
}
