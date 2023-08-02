import React, { useEffect, useState } from "react";
import CardAcompanhamento from "../components/CardAcompanhamento";
// import Questionario from '../components/Questionario'
import { BrowserView, isWindows, MobileView } from "react-device-detect";
import VotacaoAberta from "../components/VotacaoAberta";

const Avaliacao = () => {
  useEffect(()=>{
    if(window.sessionStorage.getItem('id') === null && window.sessionStorage.getItem('id') === null){
      window.location.href = '/'
    }
  });
  return (
    <div>
      <BrowserView>
        <VotacaoAberta />
      </BrowserView>
      <MobileView>
        <CardAcompanhamento />
      </MobileView>
    </div>
  );
};
export default Avaliacao;
