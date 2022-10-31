import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styled";

const Resultado = () => {
  const [tab, setTab] = useState([]);
  const [popular, setPopular] = useState([]);
  const check = async () => {
    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/fag.php",
      JSON.stringify({
        PG: "resultado",
      })
    );

    const { tabela, popular } = (await json).data;
    setTab(tabela);
    setPopular(popular);
  };
  useEffect(() => {
    check();
    console.log(tab);
  }, []);
  return (
    <>
      <S.Container>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th style={{ width: "70%" }}>Trabalho</th>
              <th>Categoria</th>
              <th>Voto popular</th>
              <th>Nota Final</th>
            </tr>
          </thead>
          <tbody>
            {tab.map((row) => (
                <tr>
                  <th>{row.id_projeto}</th>
                  <th style={{ width: "70%" }}>{row.titulo}</th>
                <th>{row.categoria === 1?'Produto':'Solução'}</th>
                
                  {popular.map((nt) => (
                    <th>{nt.id_projeto === row.id_projeto ? '1' : '0'}</th>
                    
                  ))}
                <th>{row.nota}</th>
                </tr>
              
            ))}
          </tbody>
        </table>
      </S.Container>
    </>
  );
};
export default Resultado;
