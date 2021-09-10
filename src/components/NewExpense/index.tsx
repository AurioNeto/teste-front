import React, { FormEvent, useState } from "react";
import { createExpense } from "../../actions/expenses";
import { useHistory } from "react-router-dom";
import { Button } from "../Button";
import { Container } from "./style";

export function CreateExpense() {
  const [date, setDate] = useState("2021-01-01");
  const [value, setValue] = useState(0);
  const [item, setItem] = useState("");
  const history = useHistory();

  async function handleNewExpense(event: FormEvent) {
    event.preventDefault();

    await createExpense({
      date,
      value,
      item,
    });

    history.goBack();
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

      <Button isSubmit>Salvar</Button>
    </Container>
  );
}
