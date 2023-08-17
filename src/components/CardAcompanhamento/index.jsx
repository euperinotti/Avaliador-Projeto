import { useEffect, useState } from 'react';
import * as S from './styled';
import { Base } from '../Base';
import { axiosCheckMedia, axiosCheckNaoAvaliados, axiosCheckTrabalhos } from '../../axios/axios-provider';
import { Button } from '../Botao';
import { GradeNotas } from '../GradeNotas';
import { ButtonResult } from '../BotaoSecundario';
import { Link, useNavigate } from 'react-router-dom';
import { Heading } from '../Heading';

const CardAcompanhamento = () => {
  const [avaliados, setAvaliados] = useState(0);
  const [media, setMedia] = useState(0);
  const [sem_avaliacao, setSem_avaliacao] = useState(0);

  const navigate = useNavigate();

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
    if (!window.sessionStorage.getItem('token')) {
      window.location.href = '/'
    }
    checkTrabalhos();
    checkNaoAvaliados();
    checkMedia();
  });

  return (
    <Base>
      <Heading>Bem Vindo, {window.sessionStorage.getItem('nome')?.toUpperCase()}</Heading>

      <GradeNotas>
        <S.Number>
          <S.Text>Trabalhos avaliados:</S.Text>
          <S.Nota>{avaliados}</S.Nota>
        </S.Number>

        <S.Number>
          <S.Text>Média de notas:</S.Text>
          <S.Nota>{media}</S.Nota>
        </S.Number>

        <S.Number>
          <S.Text onClick={() => { window.location.href = '/semavaliacao' }}>Trabalhos sem avaliação:</S.Text>
          <S.Nota>{sem_avaliacao}</S.Nota>
        </S.Number>
      </GradeNotas>

      <br />

      <Link to="/leitor">
        <Button>
          Iniciar Avaliação
        </Button>
      </Link>

      <br />

      <ButtonResult onClick={() => { navigate("/resultado") }}>
        Resultado
      </ButtonResult>

    </Base>
  );
};
export default CardAcompanhamento;
