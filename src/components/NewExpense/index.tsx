import React, { FormEvent, useState } from "react";
import { createExpense } from "../../actions/expenses";
import { useHistory } from "react-router-dom";
import { Button } from "../Button";
import { ButtonContainer, Container } from "./style";

export function CreateExpense() {
  const [date, setDate] = useState("2021-01-01");
  const [value, setValue] = useState(0);
  const [item, setItem] = useState("");
  const history = useHistory();

  async function handleNewExpense(event: FormEvent) {
    event.preventDefault();

    try {
      await createExpense({
        date,
        value,
        item,
      });

      return history.goBack();
    } catch (err) {
      alert("Preenhca todos os dados!");
    }
  }

  return (
    <Container onSubmit={handleNewExpense}>
      <h2>Criar Despesa</h2>

      <input
        placeholder="Data"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />

      <input
        placeholder="Descrição"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />

      <input
        type="number"
        placeholder="Valor"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />

      <ButtonContainer>
        <Button isSubmit color={'var(--edit-button)'}>Salvar</Button>
        <Button
          handleClick={() => {
            history.goBack();
          }} color={'var(--delete-button)'}
        >
          Voltar
        </Button>
      </ButtonContainer>
    </Container>
  );
}
