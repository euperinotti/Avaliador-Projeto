import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthPopup, authAvaliador } from '../auth';
import { axiosCheckMedia, axiosCheckNaoAvaliados, axiosCheckTrabalhos } from '../axios/axios-provider';
import { Base, Button, ButtonResult, CardNota, GradeNotas, Heading } from '../components';

const Avaliador = () => {
  const [avaliados, setAvaliados] = useState(0);
  const [media, setMedia] = useState(0);
  const [sem_avaliacao, setSem_avaliacao] = useState(0);
  const authUser = authAvaliador()
  const navigate = useNavigate();


  const checkTrabalhos = async () => {
    const json = await axiosCheckTrabalhos(window.sessionStorage.getItem('id'));
    const avaliados = json.data;
    setAvaliados(avaliados.length);
  }

  const checkNaoAvaliados = async () => {
    const json = await axiosCheckNaoAvaliados()
    const sem_avaliacao = json.data.quantidade;
    setSem_avaliacao(sem_avaliacao);
  }

  const checkMedia = async () => {
    const json = await axiosCheckMedia(window.sessionStorage.getItem('id'));
    const { media } = json.data;
    setMedia(media);
  }


  useEffect(async () => {
      await checkTrabalhos();
      await checkNaoAvaliados();
      await checkMedia();
  });

  return (
    <Base>
      {!authUser.status && (<AuthPopup message={authUser.message} />)}
      <Heading>Bem Vindo, {window.sessionStorage.getItem('nome')?.toUpperCase()}</Heading>

      <GradeNotas>
        <CardNota titulo="Trabalhos Avaliados" nota={avaliados} />
        <CardNota titulo="Média de notas" nota={media} />
        <CardNota onClick={() => { navigate('/semavaliacao') }} titulo="Trabalhos Sem Avaliação" nota={sem_avaliacao} />
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
