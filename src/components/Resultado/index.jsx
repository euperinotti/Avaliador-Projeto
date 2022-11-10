import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styled";

const Resultado = () => {
  const [tab, setTab] = useState([]);
  const [popular, setPopular] = useState([]);
  const [tabs2, setTabs2] = useState([]);
  const [populars2, setPopulars2] = useState([]);
  const check = async () => {
    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/fag.php",
      JSON.stringify({
        PG: "resultado",
      })
    );

    const { tabela, popular,tabela2, popular2 } = (await json).data;
    setTab(tabela);
    setPopular(popular);
    setTabs2(tabela2);
    setPopulars2(popular2);
  };
  useEffect(() => {
    check();
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
                <th>{row.categoria === 1 ? "Produto" : "Solução"}</th>
                <th>
                {popular.map((nt,key) => (
                  nt.id_projeto === row.id_projeto ? (key === 1 ? 10:(key === 2 ? 5:3)):'' 
                ))}
                </th>
                <th>{row.nota}</th>
              </tr>
            ))}
          </tbody>
        </table>

      </S.Container>
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
            {console.log(populars2)}
            {tabs2.map((row1) => (
              <tr>
                <th>{row1.id_projeto}</th>
                <th style={{ width: "70%" }}>{row1.titulo}</th>
                <th>{row1.categoria === 1 ? "Solução" : "Produto"}</th>
                <th>
                {populars2.map((nt1,key) => (
                  nt1.id_projeto === row1.id_projeto ? (key === 1 ? 10:(key === 2 ? 5:3)):'' 
                ))}
                </th>
                <th>{row1.nota}</th>
              </tr>
            ))}
          </tbody>
        </table>

      </S.Container>
    </>
  );
};
export default Resultado;
