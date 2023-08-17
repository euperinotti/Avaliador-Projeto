import { useEffect, useState } from "react";
import * as S from "./styled";
import { axiosAvaliado, axiosProjeto } from "../../axios/axios-provider";
import { Questao } from "../Questao";
import { Heading } from "../Heading";
import { Button } from "../Botao";
import { Base } from "../Base";

const Questoes = () => {
  const [titulo, setTitulo] = useState("");
  const [trabalho, setTrabalho] = useState("");
  const [quest1, setQuest1] = useState(0);
  const [quest2, setQuest2] = useState(0);
  const [quest3, setQuest3] = useState(0);
  const [quest4, setQuest4] = useState(0);


  const Check = async () => {
    const json = await axiosProjeto();

    if (json) {
      const { idProjeto, titulo, erro } = json;
      setTrabalho(idProjeto);
      setTitulo(titulo);

      // if (erro == 0) {
      //   alert('Trabalho ja avaliado.');
      //   window.location.href = '/avaliacao';
      // }
      // }else if (erro === 2) {
      //   alert('Trabalho não disponivel para esse avaliador.');
      //   window.location.href = '/avaliacao';
      // }
    }
  };

  const Envio = async () => {

    const json = await axiosAvaliado(trabalho, quest1, quest2, quest3, quest4)

    const { id_avaliacao } = json;

    if (id_avaliacao) {
      window.sessionStorage.removeItem('trabalho');
      window.location.href = '/avaliador';
    }

  }

  useEffect(() => {
    Check();
  });


  return (
    <Base>
      <Heading>{titulo}</Heading>
      <Questao
        titulo="Quão inovadora é a ideia?"
        label={quest1}
        value={quest1}
        onChange={(e) => { setQuest1(e.target.value); }}
      />

      {quest1 !== 0 && (
        <Questao
          titulo="A ideia soluciona o problema proposto?"
          label={quest2}
          value={quest2}
          onChange={(e) => { setQuest2(e.target.value); }}
        />
      )}

      {quest2 !== 0 && (
        <Questao
          titulo="A viabilidade da ideia no mercado de trabalho?"
          label={quest3}
          value={quest3}
          onChange={(e) => { setQuest3(e.target.value); }}
        />
      )}

      {quest3 !== 0 && (
        <Questao
          titulo="A forma como a ideia foi exposta(criatividade, informações,
            comunicação assertiva)"
          label={quest4}
          value={quest4}
          onChange={(e) => { setQuest4(e.target.value); }}
        />
      )}

      {quest4 !== 0 && (
        <Button onClick={Envio}>Finalizar avaliação</Button>
      )}
    </Base>
  )
};
export default Questoes;
