import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styled";
import Logo from "./logo_login.png";

const VotacaoAberta = () => {
  const [retornos, setRetorno] = useState([]);
  const [voto, setVoto] = useState("");
  const headlerSubmit = () => {
    e.preventDefault();
  };

  useEffect(() => {
    participante();
    checkVoto();
  }, []);
  const participante = async () => {
    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/fag.php",
      JSON.stringify({
        PG: "participantes",
      })
    );

    const { dados } = (await json).data;

    setRetorno(dados);
  };
  const checkVoto = async () => {
    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/fag.php",
      JSON.stringify({
        PG: "checkvoto",
        participante:window.sessionStorage.getItem("id_pessoa"),
      })
    );

    const { check } = (await json).data;
      
    if (check === 1) {
      alert('Só pode ser realizado 1 voto por usuario.');
      window.location.href = '/';
    }
  };
  const enviar = async () => {
    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/fag.php",
      JSON.stringify({
        id_projeto: voto,
        id_pessoa: window.sessionStorage.getItem("id_pessoa"),
        PG: "voto",
      })
    );

    const { status } = (await json).data;
    if (status === 1) {
      alert('Obrigado pelo seu voto');
      window.location.href = '/';
    } else {
      alert('Ops tivemos um erro, favor atualizar a pagina e tentar de novo.')
    }
    
  };

  return (
    <S.Container>
      <S.Form>
        <img src={Logo} />
        <h1>Votação Popular</h1>
        <p>
          Selecione o projeto que deseja enviar seu voto e depois clique em
          enviar voto.
          <br />
          <strong>*</strong> Cada usuario tem direito a 1 voto.
        </p>
        <select
          required
          onChange={(v) => setVoto(v.target.value)}
          onClick={voto}
        >
          <option> Selecione o Projeto para seu voto</option>
          {retornos.map((retorno) => (
            <option value={retorno.id_projeto}>{retorno.titulo}</option>
          ))}
        </select>
        <S.Botao onClick={enviar}>Enviar Voto</S.Botao>
      </S.Form>
    </S.Container>
  );
};
export default VotacaoAberta;
