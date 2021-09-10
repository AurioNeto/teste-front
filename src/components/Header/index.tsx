import React from "react";
import * as S from "./style";

import logo from '../../assets/logo.png'

export function Header() {
  return (
    <S.Container>
      <img src={logo} alt="logo" />
    </S.Container>
  )
}