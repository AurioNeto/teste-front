import React, { ReactNode } from "react";
import * as M from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  small?: boolean;
  isSubmit?: boolean;
  handleClick?: () => void;
}

export function Button({ children, color, isSubmit, small, handleClick }: ButtonProps) {
  const useStyles = makeStyles({
    root: {
      background: color ? color : "linear-gradient(45deg, #c7d84e 30%, #33af23 90%)",
      width: small ? 40 : "auto",
      minWidth: small ? 40 : "auto",
      borderRadius: small ? 25 : 3,
      border: 0,
      color: "white",
      height: small ? 25 : 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px #C8D84E67",
      marginTop: "2rem",
      marginBottom: small ? 0 : "1rem",
    },
    label: {
      textTransform: "capitalize",
    },
  });

  const classes = useStyles();
  return (
    <M.Button
      type={isSubmit ? "submit" : "button"}
      onClick={handleClick}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      {children}
    </M.Button>
  );
}
