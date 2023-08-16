import { useEffect, useState } from "react";
import { axiosCheckVoto, axiosParticipantes, axiosVotoPopular } from "../axios/axios-provider";
import { Base } from "../components/Base";
import { Button } from "../components/Botao";
import { Option } from "../components/Option";
import { Select } from "../components/Select";
import Form from "../components/Form";
import * as S from './styles/votacao-aberta'

const VotacaoAberta = () => {

  if(!window.sessionStorage.getItem('token')) {
    window.location.href = '/'
  }

  const [projetos, setProjetos] = useState([]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const voto1 = document.querySelector("select[name='categoria1']")
    const voto2 = document.querySelector("select[name='categoria2']")
    const voto3 = document.querySelector("select[name='categoria3']")
    await enviar(voto1.value, voto2.value, voto3.value);
  };

  useEffect(async () => {
    await participante();
    await checkVoto();
  }, []);


  const participante = async () => {
    const json = await axiosParticipantes()

    const projetos = json.data.participantes;

    setProjetos(projetos);
  };

  const checkVoto = async () => {
    const json = await axiosCheckVoto(window.sessionStorage.getItem('id'))

    const { codigo } = json.data;

    if (codigo === 200) {
      alert('Só pode ser realizado 1 voto por usuario.');
      window.location.href = '/';
    }
  };

  const enviar = async (voto1, voto2, voto3) => {
    const json = await axiosVotoPopular(voto1, window.sessionStorage.getItem('id'))
    const json2 = await axiosVotoPopular(voto2, window.sessionStorage.getItem('id'))
    const json3 = await axiosVotoPopular(voto3, window.sessionStorage.getItem('id'))

    const { codigo, status } = json.data;
    if (codigo == 200) {
      alert(status);
      window.sessionStorage.clear();
      window.location.href = '/';
    } else {
      alert('Ops tivemos um erro, favor atualizar a pagina e tentar de novo.')
    }
  };

  return (
    <Base>
      <Form>
        <S.Heading>Votação Popular</S.Heading>
        <S.Paragraph>
          Selecione o projeto que deseja enviar seu voto e depois clique em
          enviar voto.
          <br />
          <br />
          <strong>Cada usuário tem direito a 1 voto.</strong>
        </S.Paragraph>

        <Select className="produtos" name="categoria1">
          {projetos.map((e, index) => {
            if (e.categoria == 1) {
              return (<Option value={e.id_projeto} key={index}>{e.titulo}</Option>)
            }
          })}
        </Select>

        <Select className="soluções" name="categoria2">
          {projetos.map((e, index) => {
            if (e.categoria == 2) {
              return (<Option value={e.id_projeto} key={index}>{e.titulo}</Option>)
            }
          })}
        </Select>

        <Select className="aplicativos" name="categoria3">
          {projetos.map((e, index) => {
            if (e.categoria == 3) {
              return (<Option value={e.id_projeto} key={index}>{e.titulo}</Option>)
            }
          })}
        </Select>

        <Button onClick={e => handlerSubmit(e)}>Enviar Voto</Button>
      </Form>
    </Base>
  );
};

export default VotacaoAberta;
