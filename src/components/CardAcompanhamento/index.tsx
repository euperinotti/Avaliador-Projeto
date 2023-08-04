import { useEffect, useState } from 'react';
import * as S from './styled';
const axios = require("axios").default;

const CardAcompanhamento = () => {
  const [avaliados, setAvaliados] = useState(0);
  const [media, setMedia] = useState(0);
  const [sem_avaliacao, setSem_avaliacao] = useState(0);


  const checkTrabalhos = async () => {
    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/rotas/avaliados.php",
      JSON.stringify({
        avaliador: window.sessionStorage.getItem('id'),
        PG: "avaliados",
      })

    );
    const { avaliados } = (await json).data;
    
    setAvaliados(avaliados);
  }
  const checkNaoAvaliados = async () => {
    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/rotas/sem-avaliacao.php",
      JSON.stringify({
        PG: "semAvaliacao",
        tipo:window.sessionStorage.getItem('tipo'),
        id_avaliador: window.sessionStorage.getItem('id')  
      })

    );
    const { sem_avaliacao } = (await json).data;
    setSem_avaliacao(sem_avaliacao);
  }
  const checkMedia = async () => {
    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/rotas/media.php",
      JSON.stringify({
        avaliador: window.sessionStorage.getItem('id'),
        PG: "media",
      })

    );
    const { media } = (await json).data;
    setMedia(media);
  }
  useEffect(() => {
    checkTrabalhos();
    checkNaoAvaliados();
    checkMedia();
  });
  return (
    <S.Card>
      <h4>Bem Vindo <br/>  {window.sessionStorage.getItem('nome')}</h4>

      <S.Number>
        <S.Text>Trabalhos avaliados:  <strong>{avaliados}</strong></S.Text>
        <S.Text>Média de notas:   <strong>{media}</strong></S.Text>
        
      </S.Number>
            <S.Number>
        <S.Text onClick={()=>{window.location.href ='/semavaliacao'}}>Trabalhos sem avaliação:  <strong>{sem_avaliacao}</strong></S.Text>
        <S.Text onClick={()=>{window.location.href="/leitor"}}>Iniciar Avaliação</S.Text>
        
      </S.Number>
      
    </S.Card>

  );
};
export default CardAcompanhamento;
