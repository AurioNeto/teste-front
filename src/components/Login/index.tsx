import React, { useState } from "react";
import * as S from "./style";
import * as M from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Button } from "../Button";
import { getStart } from "../../actions/auth";
import { useHistory } from "react-router-dom";

const CssTextField = withStyles({
  root: {
    width: "250px",
    color: "white !important",
    "& label": {
      color: "#c7d84e",
    },
    "& label.Mui-focused": {
      color: "#33af23",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#33af23",
    },
  },
})(M.TextField);

export function Login() {
  const [email, setEmail] = useState("");

  const history = useHistory();

  const token = localStorage.getItem("token");

  if (!token) {
    localStorage.setItem("token", "tokenHolder");
    document.location.reload();
  }

  const handleSubmit = async (event: any) => {
    try {
      event.preventDefault();
      const { data }: any = await getStart(email);

      localStorage.setItem("token", data.token);

      history.push("/expenses");
    } catch {
      alert('Insira um e-mail válido')
    }
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <M.Grid container spacing={1} alignItems="flex-end">
          <M.Grid item>
            <AccountCircle className="input-colors" />
          </M.Grid>
          <M.Grid item>
            <CssTextField
              id="input-email"
              label="e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </M.Grid>
        </M.Grid>

        <Button isSubmit>Fazer Login</Button>
      </form>
    </S.Container>
  );
}
