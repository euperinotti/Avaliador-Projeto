import { useEffect, useState } from "react";
import { axiosResultado } from "../axios/axios-provider";
import { Base, Tabela, TableContainer } from "../components";
import { useNavigate } from "react-router-dom";
import { authAvaliador, AuthPopup } from "../auth";

const Resultado = () => {
  const [resultadoProduto, setResultadoProduto] = useState([]);
  const [resultadoSolucao, setResultadoSolucao] = useState([]);
  const colunas = ["Trabalho", "Voto Popular", "Nota Final"];
  const authUser = authAvaliador();

  useEffect(() => {

    async function fetchData() {
      const json = await axiosResultado();

      if (json) {
        setResultadoProduto(json.filter((e) => e.categoria == 1).slice(0, 6))
        setResultadoSolucao(json.filter((e) => e.categoria == 2).slice(0, 6))
      } else {
        alert('Nenhum resultado encontrado')
      }
    }

    fetchData()
  }, []);

  return (
    <Base overlay={true}>
      {!authUser.status && (<AuthPopup message={authUser.message} />)}
      <TableContainer>
        <Tabela
          data={resultadoProduto}
          heading="Produto"
          colunas={colunas}
        />

        <br />

        <Tabela
          data={resultadoSolucao}
          heading="Solução"
          colunas={colunas}
        />

        <br />

        <Tabela
          data={resultadoSolucao}
          heading="Solução"
          colunas={colunas}
        />
      </TableContainer>

    </Base>
  )
};
export default Resultado;
