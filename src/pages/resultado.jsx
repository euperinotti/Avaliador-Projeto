import { useEffect, useState } from "react";
import { axiosResultado } from "../axios/axios-provider";
import { Base, Tabela } from "../components";

const Resultado = () => {
  const [notasAvaliadores, setNotasAvaliadores] = useState([]);
  const [votoPopular, setVotoPopular] = useState([]);
  const [notasAvaliadores2, setNotasAvaliadores2] = useState([]);
  const [votoPopular2, setVotoPopular2] = useState([]);
  const colunas = ["Trabalho", "Voto Popular", "Nota Final"]

  if (window.sessionStorage.getItem('acesso') != 'avaliador') {
    window.location.href = '/'
  }

  const check = async () => {
    const json = await axiosResultado();

    if (json) {
      const { resultadoCategoria1, resultadoCategoria2 } = json;
      setNotasAvaliadores(resultadoCategoria1.notasAvaliadores);
      setVotoPopular(resultadoCategoria1.votacaoPopular);
      setNotasAvaliadores2(resultadoCategoria2.notasAvaliadores);
      setVotoPopular2(resultadoCategoria2.votacaoPopular)
    } else {
      alert('Nenhum resultado encontrado')
    }
  };

  useEffect(async () => {
    await check();
  }, []);

  return (
    <Base>
      <Tabela
        notasAvaliadores={notasAvaliadores}
        votoPopular={votoPopular}
        categoria="Produto"
        colunas={colunas}
      />

      <br />

      <Tabela
        notasAvaliadores={notasAvaliadores2}
        votoPopular={votoPopular2}
        categoria="Solução"
        colunas={colunas}
      />

      {/* <Tabela
        notasAvaliadores={notasAvaliadores2}
        votoPopular={votoPopular2}
        categoria="Aplicativo"
      /> */}
    </Base>
  );
};
export default Resultado;
