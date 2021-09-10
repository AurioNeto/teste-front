import React, { useEffect, useState } from "react";
import * as S from "./style";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import _ from "lodash";
import { Button } from "../Button";
import {
  deleteExpense,
  getExpenseById,
  getExpenses,
} from "../../actions/expenses";
import { useHistory } from "react-router-dom";
import { TextField, withStyles } from "@material-ui/core";

const PaginationFields = withStyles({
  root: {
    margin: "8px 0px 0px 12px",
    color: "white !important",
    "& label": {
      color: "#343a18",
    },
    "& label.Mui-focused": {
      color: "#33af23",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#33af23",
    },
  },
})(TextField);

export function ExpensesTable() {
  const [expenses, setExpenses] = useState([]);
  const history = useHistory();

  async function listExpenses() {
    const { data }: any = await getExpenses().catch((e) => console.log(e));

    if (data) {
      setExpenses(data);
    }
  }

  const summary = expenses.reduce(
    (acc, expense: any) => {
      acc.total += expense.value;
      return acc;
    },
    {
      total: 0,
    }
  );

  const handleDate = (expense: any) => {
    const convertedDate = new Date(expense);
    const offset = convertedDate.getTimezoneOffset();
    const newDate = new Date(convertedDate.getTime() + offset * 60 * 1000);
    return new Intl.DateTimeFormat("pt-BR").format(new Date(newDate));
  };

  async function handleDelete(id: string) {
    await deleteExpense(id);
    listExpenses();
  }

  async function handleEdit(id: string) {
    const { data }: any = await getExpenseById(id);

    localStorage.setItem("editing", JSON.stringify(data));

    history.push("/edit");
  }

  useEffect(() => {
    listExpenses();
  }, []);
  return (
    <S.Container>
      <h1>DESPESAS</h1>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense: any) => (
            <tr key={expense._id}>
              <td>
                {handleDate(expense.date)}
              </td>
              <td>{expense.item}</td>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(expense.value)}
              </td>
              <td>
                <Button
                  color="var(--edit-button)"
                  handleClick={() => {
                    handleEdit(expense._id);
                  }}
                  small
                >
                  <EditIcon fontSize="small" />
                </Button>
                <Button
                  color="var(--delete-button)"
                  handleClick={() => {
                    handleDelete(expense._id);
                  }}
                  small
                >
                  <DeleteIcon fontSize="small" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <S.Totals>
        <h2>Total</h2>{" "}
        <h2>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </h2>
      </S.Totals>
      <Button
        handleClick={() => {
          history.push("/new-expense");
        }}
      >
        <p>Nova Despesa</p>
      </Button>
    </S.Container>
  );
}
