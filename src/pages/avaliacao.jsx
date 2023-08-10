import React, { useEffect, useState } from "react";
import CardAcompanhamento from "../components/CardAcompanhamento";
import { BrowserView, isWindows, MobileView } from "react-device-detect";
import VotacaoAberta from "../components/VotacaoAberta";
import { Base } from "../components/Base";

const Avaliacao = () => {
  useEffect(() => {
    if (!window.sessionStorage.getItem('token')) {
      window.location.href = '/'
    }
  });
  return (
    <Base>
      <BrowserView>
        <VotacaoAberta />
      </BrowserView>
      <MobileView>
        <CardAcompanhamento />
      </MobileView>
    </Base>
  );
};
export default Avaliacao;
