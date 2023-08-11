import axios from "axios";
import * as S from "./styled";
import { useEffect, useState } from "react";
import { Base } from "../Base";
import { Button } from "../Botao";
import { Select } from "../Select";
import { Logo } from "../Logo";
import { Option } from "../Option";
import { axiosCheckVoto, axiosParticipantes, axiosVotoPopular } from "../../axios/axios-provider";

const VotacaoAberta = () => {
  const [projetos, setProjetos] = useState([]);
  const [projetos2, setProjetos2] = useState([]);
  const [voto, setVoto] = useState("");
  const [voto2, setVoto2] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    const select1 = document.querySelector("select[name='categoria1']")
    const select2 = document.querySelector("select[name='categoria2']")
    console.log(select1.value)
    console.log(select2.value)
    // votoHandler(e);
    // enviar();
    // alert("Você votou!");
  };

  useEffect(async () => {
    await participante();
    await checkVoto();
  }, []);


  const participante = async () => {
    const json = await axiosParticipantes()

    const projetosCategoria1 = json.data.categoria1;
    const projetosCategoria2 = json.data.categoria2;

    setProjetos(projetosCategoria1);
    setProjetos2(projetosCategoria2);
  };

  const checkVoto = async () => {
    const json = await axiosCheckVoto(window.sessionStorage.getItem('id'))

    const { codigo } = json.data;

    if (codigo === 200) {
      alert('Só pode ser realizado 1 voto por usuario.');
      window.location.href = '/';
    }
  };

  const enviar = async () => {
    const json = await axiosVotoPopular(voto, window.sessionStorage.getItem('id'))

    const { codigo, status } = json.data;
    if (codigo == 200) {
      alert(status);
      window.location.href = '/';
    } else {
      alert('Ops tivemos um erro, favor atualizar a pagina e tentar de novo.')
    }
  };

  const votoHandler = (e) => {
    setVoto(e.target.value)
  }

  return (
    <Base>
      <S.Form>
        <Logo />
        <S.Heading>Votação Popular</S.Heading>
        <S.Paragraph>
          Selecione o projeto que deseja enviar seu voto e depois clique em
          enviar voto.
          <br />
          <br />
          <strong>Cada usuário tem direito a 1 voto.</strong>
        </S.Paragraph>

        <Select name="categoria1">
          {projetos.map((e, index) => {
            return <Option value={e.id_projeto} key={index}>{e.titulo}</Option>
          })}
        </Select>

        <Select name="categoria2">
          {projetos2.map((e, index) => {
            return <Option value={e.id_projeto} key={index + '2'}>{e.titulo}</Option>
          })}
        </Select>

        <Button onClick={handlerSubmit}>Enviar Voto</Button>
      </S.Form>
    </Base>
  );
};
export default VotacaoAberta;
