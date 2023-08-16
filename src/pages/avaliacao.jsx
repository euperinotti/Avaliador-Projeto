import { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Base } from "../components/Base";
import CardAcompanhamento from "../components/CardAcompanhamento";
import VotacaoAberta from "../components/VotacaoAberta";

const Avaliacao = () => {
  useEffect(() => {
    if (!window.sessionStorage.getItem('token')) {
      window.location.href = '/'
    }
  });

  return <CardAcompanhamento />;
};
export default Avaliacao;


     {/* <BrowserView>
        <VotacaoAberta />
      </BrowserView> */}
      {/* <MobileView> */}
      {/* </MobileView> */}