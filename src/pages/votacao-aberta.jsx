import { useEffect, useState } from "react";
import { AuthPopup, auth } from "../auth";
import { axiosCheckVoto, axiosParticipantes, axiosVotoPopular } from "../axios/axios-provider";
import { Base, Button, Form, Heading, Logo, Paragraph, Select } from "../components";
import { useNavigate } from "react-router-dom";

const VotacaoAberta = () => {
  const [projetos, setProjetos] = useState([]);
  const [podeVotar, setPodeVotar] = useState(true)
  const authUser = auth()
  const navigate = useNavigate()

  useEffect(async () => {
    await checkVoto()
    await participante()

    async function fetchData() {
      try {
        await checkVoto()
        await participante()
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
  });

  

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const voto1 = document.querySelector("select[name='categoria1']")
    const voto2 = document.querySelector("select[name='categoria2']")
    const voto3 = document.querySelector("select[name='categoria3']")
    await enviar(voto1.value, voto2.value, voto3.value);
  };

  const checkVoto = async () => {
    try {
      const json = await axiosCheckVoto()
      const { codigo } = json;

      if (codigo === 200) {
        setPodeVotar(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const participante = async () => {

    try {
      const json = await axiosParticipantes();
      const projetos = json.participantes;

      setProjetos(projetos);
    } catch (e) {
      console.log(e)
    }
  }

  const enviar = async (voto1, voto2, voto3) => {
    const json = await axiosVotoPopular(voto1, window.sessionStorage.getItem('id'))
    const json2 = await axiosVotoPopular(voto2, window.sessionStorage.getItem('id'))
    const json3 = await axiosVotoPopular(voto3, window.sessionStorage.getItem('id'))

    const { codigo, status } = json.data;
    if (codigo == 200) {
      alert(status);
      window.sessionStorage.clear();
      navigate('/');
    } else {
      alert('Ops tivemos um erro, favor atualizar a pagina e tentar de novo.')
    }
  };

  return (
    <Base overlay={true}>
      {!authUser.status && (<AuthPopup message={authUser.message} />)}
      {!podeVotar && (<AuthPopup message={"Você já votou"} />)}
      <Logo />
      <Heading>Votação Popular</Heading>
      <Paragraph>
        Selecione o projeto que deseja enviar seu voto e depois clique em
        enviar voto.
        <br />
        <br />
        <strong>Cada usuário tem direito a 1 voto.</strong>
      </Paragraph>
      <Form onSubmit={e => handlerSubmit(e)}>
        <Select label="produtos" name="categoria1" data={projetos} categoria="1" />
        <Select label="soluções" name="categoria2" data={projetos} categoria="2" />
        <Select label="aplicativos" name="categoria3" data={projetos} categoria="3" />
        <Button>Enviar Voto</Button>
      </Form>
    </Base>
  );
};

export default VotacaoAberta;
