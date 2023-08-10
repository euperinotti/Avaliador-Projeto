import { useEffect, useState } from 'react';
import * as S from './styled';
const axios = require("axios").default;

const CardAcompanhamento = () => {
  const [avaliados, setAvaliados] = useState(0);
  const [media, setMedia] = useState(0);
  const [sem_avaliacao, setSem_avaliacao] = useState(0);

  const headers = {
    'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
  }

  const checkTrabalhos = async () => {
    const json = await axios.get(
      "https://www4.fag.edu.br/api_summit/rotas/avaliados.php", {
      params: {
        id: window.sessionStorage.getItem('id')
      }, headers
    }
    );

    const avaliados = json.data;

    setAvaliados(avaliados.length);
  }

  const checkNaoAvaliados = async () => {
    const json = await axios.get(
      "https://www4.fag.edu.br/api_summit/rotas/sem-avaliacao.php", {
      params: {
        id: window.sessionStorage.getItem('id')
      }, headers
    }
    );

    const sem_avaliacao = json.data.quantidade;

    setSem_avaliacao(sem_avaliacao);
  }

  const checkMedia = async () => {
    const json = await axios.get(
      "https://www4.fag.edu.br/api_summit/rotas/media.php", {
      params: {
        id: window.sessionStorage.getItem('id')
      }, headers
    }
    );
    const { media } = json.data;
    setMedia(media);
  }

  useEffect(() => {
    checkTrabalhos();
    checkNaoAvaliados();
    checkMedia();
  });

  return (
    <S.Card>
      <h4>Bem Vindo <br /> {window.sessionStorage.getItem('nome')}</h4>

      <S.Number>
        <S.Text>Trabalhos avaliados:  <strong>{avaliados}</strong></S.Text>
        <S.Text>Média de notas:   <strong>{media}</strong></S.Text>
      </S.Number>

      <S.Number>
        <S.Text onClick={() => { window.location.href = '/semavaliacao' }}>Trabalhos sem avaliação:  <strong>{sem_avaliacao}</strong></S.Text>
        <S.Text onClick={() => { window.location.href = "/leitor" }}>Iniciar Avaliação</S.Text>
      </S.Number>

    </S.Card>

  );
};
export default CardAcompanhamento;
