import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosCheckMedia, axiosCheckNaoAvaliados, axiosCheckTrabalhos } from '../axios/axios-provider';
import { Base } from '../components/Base';
import { Button } from '../components/Botao';
import { ButtonResult } from '../components/BotaoSecundario';
import { CardNota } from '../components/CardNota';
import { GradeNotas } from '../components/GradeNotas';
import { Heading } from '../components/Heading';
import { auth, authAvaliador, AuthPopup } from '../auth';

const Avaliador = () => {
  const [avaliados, setAvaliados] = useState(0);
  const [media, setMedia] = useState(0);
  const [sem_avaliacao, setSem_avaliacao] = useState(0);
  const authUser = authAvaliador()
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


  useEffect(async () => {
    try {
      await checkTrabalhos();
      await checkNaoAvaliados();
      await checkMedia();
    } catch (e) {
      console.log(e)
    }
  });

  return (
    <Base>
      {!authUser.status && (<AuthPopup message={authUser.message} />)}
      <Heading>Bem Vindo, {window.sessionStorage.getItem('nome')?.toUpperCase()}</Heading>

      <GradeNotas>
        <CardNota titulo="Trabalhos avaliados" nota={avaliados} />
        <CardNota titulo="Média de notas" nota={media} />
        <CardNota onClick={() => { navigate('/semavaliacao') }} titulo="Trabalhos sem avaliação" nota={sem_avaliacao} />
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
