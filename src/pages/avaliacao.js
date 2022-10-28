import React,{useState} from "react";
import CardAcompanhamento from "../components/CardAcompanhamento";
// import Questionario from '../components/Questionario'
import { BrowserView, MobileView } from "react-device-detect";
import VotacaoAberta from "../components/VotacaoAberta";

const Avaliacao = () => {

  return (
    <div>
      <BrowserView>
        <VotacaoAberta/>
      </BrowserView>
      <MobileView>
        
          <CardAcompanhamento />        
        
       
      </MobileView>
    </div>
  );
  
};
export default Avaliacao;
