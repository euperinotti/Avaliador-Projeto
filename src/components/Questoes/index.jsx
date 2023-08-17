import { useEffect, useState } from "react";
import * as S from "./styled";
import { axiosAvaliado } from "../../axios/axios-provider";
import { Questao } from "../Questao";
const axios = require("axios").default;

const Questoes = () => {
  const [titulo, setTitulo] = useState("");
  const [trabalho, setTrabalho] = useState("");
  const [quest1, setQuest1] = useState(0);
  const [quest2, setQuest2] = useState(0);
  const [quest3, setQuest3] = useState(0);
  const [quest4, setQuest4] = useState(0);


  const Check = async () => {
    const json = axios.get(
      "https://www4.fag.edu.br/api_summit/src/rotas/projeto.php", {
      params: {
        id: window.sessionStorage.getItem('id'),
        qr: window.sessionStorage.getItem('trabalho')
      }
    }
    );

    const { idProjeto, titulo, erro } = (await json).data;
    setTrabalho(trabalho);
    setTitulo(titulo);

    if (erro) {
      alert('Trabalho ja avaliado.');
      window.location.href = '/avaliacao';
    }
    // }else if (erro === 2) {
    //   alert('Trabalho não disponivel para esse avaliador.');
    //   window.location.href = '/avaliacao';
    // }
  };

  const Envio = async () => {

    const json = await axiosAvaliado(idProjeto, quest1, quest2, quest3, quest4)

    const { id_avaliacao } = (await json).data;

    if (id_avaliacao) {
      window.sessionStorage.removeItem('trabalho');
      window.location.href = '/avaliacao';
    }

  }

  useEffect(() => {
    Check();

  });


  return (
    <div>
      <S.Card>
        <h4>{titulo}</h4>
      </S.Card>
      <S.Card>

        <Questao 
          titulo="Quão inovadora é a ideia?" 
          label={quest1} 
          value={quest1} 
          onChange={(e) => { setQuest1(e.target.value); }}
        />


        {quest1 !== 0 && (
          <S.Text>
            A ideia soluciona o problema proposto?
            <br />
            <br />
            <input
              type="range"
              min={0}
              max={10}
              label={quest2}
              value={quest2}
              onChange={(e) => {
                setQuest2(e.target.value);
              }}
              list="tickmarks"
              className="slider"
            />
            <datalist id="tickmarks">
              <option value="0" label="0"></option>
              <option value="1" label="."></option>
              <option value="2" label="."></option>
              <option value="3" label="."></option>
              <option value="4" label="."></option>
              <option value="5" label="5"></option>
              <option value="6" label="."></option>
              <option value="7" label="."></option>
              <option value="8" label="."></option>
              <option value="9" label="."></option>
              <option value="10" label="10"></option>
            </datalist>
            <br />
          </S.Text>
        )}
        {quest2 !== 0 && (
          <S.Text>
            A viabilidade da ideia no mercado de trabalho?
            <br />
            <br />
            <input
              type="range"
              min={0}
              max={10}
              label={quest3}
              value={quest3}
              onChange={(e) => {
                setQuest3(e.target.value);
              }}
              list="tickmarks"
              className="slider"
            />
            <datalist id="tickmarks">
              <option value="0" label="0"></option>
              <option value="1" label="."></option>
              <option value="2" label="."></option>
              <option value="3" label="."></option>
              <option value="4" label="."></option>
              <option value="5" label="5"></option>
              <option value="6" label="."></option>
              <option value="7" label="."></option>
              <option value="8" label="."></option>
              <option value="9" label="."></option>
              <option value="10" label="10"></option>
            </datalist>
            <br />
          </S.Text>
        )}
        {quest3 !== 0 && (
          <S.Text>
            A forma como a ideia foi exposta(criatividade, informações,
            comunicação assertiva):
            <br />
            <br />
            <input
              type="range"
              min={0}
              max={10}
              label={quest4}
              value={quest4}
              onChange={(e) => {
                setQuest4(e.target.value);
              }}
              list="tickmarks"
              className="slider"
            />
            <datalist id="tickmarks">
              <option value="0" label="0"></option>
              <option value="1" label="."></option>
              <option value="2" label="."></option>
              <option value="3" label="."></option>
              <option value="4" label="."></option>
              <option value="5" label="5"></option>
              <option value="6" label="."></option>
              <option value="7" label="."></option>
              <option value="8" label="."></option>
              <option value="9" label="."></option>
              <option value="10" label="10"></option>
            </datalist>
            <br />
          </S.Text>
        )}
        {quest4 !== 0 && (
          <S.Botao onClick={Envio}>Finalizar avaliação</S.Botao>
        )}


      </S.Card>
    </div>
  );
};
export default Questoes;
