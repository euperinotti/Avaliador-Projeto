import { useEffect, useState } from "react";
import * as S from "./styled";
const axios = require("axios").default;

const Questoes = () => {
  const [titulo, setTitulo] = useState("");
  const [trabalho, setTrabalho] = useState("");
  const [quest1, setQuest1] = useState(0);
  const [quest2, setQuest2] = useState(0);
  const [quest3, setQuest3] = useState(0);
  const [quest4, setQuest4] = useState(0);


  const Check = async () => {
    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/fag.php",
      JSON.stringify({
        qr: window.sessionStorage.getItem('trabalho'),
        id_avaliador: window.sessionStorage.getItem('id_avaliador'),
        PG: "evento",
      })
    );

    const { trabalho, titulo,erro } = (await json).data;
    setTrabalho(trabalho);
    setTitulo(titulo);
    console.log(titulo);
    
    if (erro === 1) {
      alert('Trabalho ja avaliado.');
      window.location.href = '/avaliacao';
    }
  };
  const Envio = async () => {

    const json = axios.post(
      "https://www4.fag.edu.br/api_summit/fag.php",
      JSON.stringify({
        avaliador: window.sessionStorage.getItem('id_avaliador'),
        quest1: quest1,
        quest2: quest2,
        quest3: quest3,
        quest4: quest4,
        id_projeto: trabalho,
        PG: "avaliado",
      })
    );

    const { avaliacao } = (await json).data;
    
    if (avaliacao !== 0) {
      window.sessionStorage.removeItem('trabalho');
      window.location.href = '/avaliacao';
    }

   }
  
  useEffect(() => {
    Check();

  });


  return (
    <div style={{marginTop:'4rem'}}>
      <S.Card>
        <h4>{titulo}</h4>
      </S.Card>
      <S.Card>

          <S.Text>
            Quão inovadora é a ideia?
            <br />
            <br />
            <input
              type="range"
              min={0}
              max={10}
              label={quest1}
              value={quest1}
              onChange={(e) => {
                setQuest1(e.target.value);
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
            <br/>
          </S.Text>

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
              <br/>
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
              <br/>
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
              <br/>
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
