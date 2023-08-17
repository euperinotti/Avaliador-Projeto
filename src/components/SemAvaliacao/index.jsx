import { useState, useEffect } from 'react';
import * as S from './styled'
import axios from 'axios'
const semAvaliacao = () => {
  const [list, setList] = useState([])
  const Carrega = async () => {
    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/fag.php",
      JSON.stringify({
        PG: "semAvaliacaoList",
        tipo: window.sessionStorage.getItem('tipo'),
        id_avaliador: window.sessionStorage.getItem('id_avaliador'),
      })
    );
    const { dados } = (await json).data;
    setList(dados);
    // console.log(dados);
  }
  useEffect(() => {
    Carrega();
  }, []);
  return (
    <S.Card>
      <table className="table" style={{backgroundColor:'#fff',marginTop:'2rem'}}>
        <thead className="thead-light">
          <tr>
            <th>Titulo</th>
            <th>Cód</th>
          </tr>
        </thead>
        <tbody style={{textAlign:'center'}}>
          {list.map((row) => (
            <tr>
              <th>{row.titulo}</th>
              <th>{row.id_projeto}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Card>
  );
}
export default semAvaliacao;