import { useEffect, useState } from "react";
import { axiosResultado } from "../axios/axios-provider";
import { Base, Tabela } from "../components";
import { useNavigate } from "react-router-dom";
import { authAvaliador, AuthPopup } from "../auth";

const Resultado = () => {
  const [resultadoProduto, setResultadoProduto] = useState([]);
  const [resultadoSolucao, setResultadoSolucao] = useState([]);
  const colunas = ["Trabalho", "Voto Popular", "Nota Final"];
  const authUser = authAvaliador();

  const check = async () => {
    const json = await axiosResultado();

    if (json) {
      setResultadoProduto(json.filter((e) => e.categoria == 1).slice(0, 6))
      setResultadoSolucao(json.filter((e) => e.categoria == 2).slice(0, 6))
    } else {
      alert('Nenhum resultado encontrado')
    }
  };

  useEffect(async () => {
    await check();
  }, []);

  return (
    <Base>
    {!authUser.status && (<AuthPopup message={authUser.message} />)}
      <Tabela
        resultado={resultadoProduto}
        categoria="Produto"
        colunas={colunas}
      />

      <br />

      <Tabela
        resultado={resultadoSolucao}
        categoria="Solução"
        colunas={colunas}
      />
      
    </Base>
  );
};
export default Resultado;
