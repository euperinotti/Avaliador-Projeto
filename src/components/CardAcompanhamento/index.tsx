import { useEffect, useState } from 'react';
import * as S from './styled';
import { Base } from '../Base';
import { axiosCheckMedia, axiosCheckNaoAvaliados, axiosCheckTrabalhos } from '../../axios/axios-provider';
const axios = require("axios").default;

const CardAcompanhamento = () => {
  const [avaliados, setAvaliados] = useState(0);
  const [media, setMedia] = useState(0);
  const [sem_avaliacao, setSem_avaliacao] = useState(0);

  const checkTrabalhos = async () => {
    const json = await axiosCheckTrabalhos();
    const avaliados = json.data;

    setAvaliados(avaliados.length);
  }

  const checkNaoAvaliados = async () => {
    const json = await axiosCheckNaoAvaliados()

    const sem_avaliacao = json.data.quantidade;

    setSem_avaliacao(sem_avaliacao);
  }

  const checkMedia = async () => {
    const json = await axiosCheckMedia();
    const { media } = json.data;
    setMedia(media);
  }

  useEffect(() => {
    checkTrabalhos();
    checkNaoAvaliados();
    checkMedia();
  });

  return (
    <Base>
      <S.Heading>Bem Vindo, <br />{window.sessionStorage.getItem('nome')?.toUpperCase()}</S.Heading>

      <S.Number>
        <S.Text>Trabalhos avaliados: <strong>{avaliados}</strong></S.Text>
        <S.Text>Média de notas: <strong>{media}</strong></S.Text>
      </S.Number>

      <S.Number>
        <S.Text onClick={() => { window.location.href = '/semavaliacao' }}>Trabalhos sem avaliação:  <strong>{sem_avaliacao}</strong></S.Text>
        <S.Text onClick={() => { window.location.href = "/leitor" }}>Iniciar Avaliação</S.Text>
      </S.Number>
    </Base>

  );
};
export default CardAcompanhamento;
