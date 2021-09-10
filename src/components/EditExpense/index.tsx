import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { editExpense } from "../../actions/expenses";
import { Button } from "../Button";
import { Container } from "./style";

export function EditExpense() {
  const history = useHistory();
  const edit = localStorage.getItem("editing");
  const expense = edit && JSON.parse(edit);

  const convertedDate = new Date(expense.date)
  const offset = convertedDate.getTimezoneOffset();
  const newDate = new Date(convertedDate.getTime() + offset * 60 * 1000);
  const formatedDate = newDate.toISOString().split("T")[0];

  const [date, setDate] = useState(formatedDate);
  const [value, setValue] = useState(expense.value);
  const [item, setItem] = useState(expense.item);

  async function handleEditExpense(event: FormEvent) {
    event.preventDefault();

    await editExpense(expense._id, {
      date: date,
      value: value,
      item: item
    })

    history.goBack()
  }

  return (
    <Container onSubmit={handleEditExpense}>
      <h2>Editar Despesa</h2>

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