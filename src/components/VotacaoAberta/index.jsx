import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styled";
import Logo from "./logo_login.png";

const VotacaoAberta = () => {
  const [projetos, setProjetos] = useState([]);
  const [projetos2, setProjetos2] = useState([]);
  const [voto, setVoto] = useState("");
  const [voto2, setVoto2] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    enviar()
  };

  useEffect(async () => {
    await participante();
    await checkVoto();
  }, []);

  const headers = {
    'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`,
  }

  const participante = async () => {
    const json = await axios.post(
      "https://www4.fag.edu.br/api_summit/rotas/participantes.php",
      JSON.stringify({
        id: window.sessionStorage.getItem('id')
      }), { headers }
    );

    const projetosCategoria1 = json.data.categoria1;
    const projetosCategoria2 = json.data.categoria2;

    setProjetos(projetosCategoria1);
    setProjetos2(projetosCategoria2);
  };

  const checkVoto = async () => {
    const json = await axios.post(
      "https://www4.fag.edu.br/api_summit/rotas/check-voto-popular.php",
      JSON.stringify({
        id: window.sessionStorage.getItem('id')
      }), { headers }
    );

    const { codigo } = json.data;

    if (codigo === 200) {
      alert('Só pode ser realizado 1 voto por usuario.');
      window.location.href = '/';
    }
  };

  const enviar = async () => {

    const json = await axios.post(
      "https://www4.fag.edu.br/api_summit/rotas/voto-popular.php", JSON.stringify({
        id_projeto: voto,
        id_pessoa: window.sessionStorage.getItem('id')
      }), { headers }
    );

    const { status } = json.data;
    if (status === 200) {
      alert('Obrigado pelo seu voto');
      window.location.href = '/';
    } else {
      alert('Ops tivemos um erro, favor atualizar a pagina e tentar de novo.')
    }

  };

  const votoHandler = (e) => {
    setVoto(e.target.value)
  }

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
          onChange={e => setProjetos(e.target.value)}
          required
        >
          {projetos.map((e, index) => {
            return <option value={e.id_projeto} key={index}>{e.titulo}</option>
          })}
        </select>

        <select
          onChange={e => setProjetos2(e.target.value)}
          required
        >
          {projetos2.map((e, index) => {
            return <option value={e.id_projeto} key={index + '2'}>{e.titulo}</option>
          })}
        </select>

        <S.Botao>Enviar Voto</S.Botao>
      </S.Form>
    </S.Container>
  );
};
export default VotacaoAberta;
