import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosCheckMedia, axiosCheckNaoAvaliados, axiosCheckTrabalhos } from '../axios/axios-provider';
import { Base } from '../components/Base';
import { Button } from '../components/Botao';
import { ButtonResult } from '../components/BotaoSecundario';
import { CardNota } from '../components/CardNota';
import { GradeNotas } from '../components/GradeNotas';
import { Heading } from '../components/Heading';

const Avaliador = () => {
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
    if (!window.sessionStorage.getItem('token') && window.sessionStorage.getItem('acesso') != 'avaliador') {
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

        <CardNota titulo="Trabalhos avaliados" nota={avaliados} />
        <CardNota titulo="Média de notas" nota={media} />
        <CardNota onClick={() => { window.location.href = '/semavaliacao' }} titulo="Trabalhos sem avaliação" nota={sem_avaliacao} />

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
export default Avaliador;
