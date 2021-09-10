import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./protected";

import { Home } from "../Pages/home";
import { Expenses } from "../Pages/expenses";
import { NewExpense } from "../Pages/new-expense";
import { UpdateExpense } from "../Pages/edit";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      <ProtectedRoute>
        <Route exact path="/expenses" component={Expenses} />
        <Route exact path="/new-expense" component={NewExpense} />
        <Route exact path="/edit" component={UpdateExpense} />
      </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}