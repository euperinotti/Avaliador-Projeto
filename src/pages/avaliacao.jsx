import { useEffect } from "react";
import CardAcompanhamento from "../components/CardAcompanhamento";

const Avaliacao = () => {
  useEffect(() => {
    if (!window.sessionStorage.getItem('token')) {
      window.location.href = '/'
    }
  });

  return <CardAcompanhamento />;
};
export default Avaliacao;