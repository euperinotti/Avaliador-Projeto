import axios from "axios";

const URL = 'https://www4.fag.edu.br/api_summit/src/rotas/'

const init = () => {
  const token = window.sessionStorage.getItem('token')
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  return {
    id: window.sessionStorage.getItem('id'),
    nome: window.sessionStorage.getItem('nome'),
    tipo: window.sessionStorage.getItem('tipo'),
    acesso: window.sessionStorage.getItem('acesso'),
    token,
    headers,
  }
}

export const axiosLogin = async (login, senha) => {
  try {
    const res = await axios.post(
      `${URL}login.php`,
      JSON.stringify({
        login: login,
        senha: senha
      }))

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const axiosVotoPopular = async (voto, idPessoa) => {

  const data = init()

  try {
    const res = await axios.post(
      `${URL}voto-popular.php`,
      JSON.stringify({
        id_projeto: voto,
        id_pessoa: idPessoa
      }),
      {
        headers: data.headers
      }
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const axiosParticipantes = async () => {

  const data = init()

  try {
    const res = await axios.get(
      `${URL}participantes.php`,
      {
        headers: data.headers
      }
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const axiosCheckVoto = async () => {

  const data = init()

  try {
   
    const res = await axios.post(
      `${URL}check-voto-popular.php`,
      JSON.stringify({
        id: data.id,
      }),
      {
        headers: data.headers
      }
    );
  
    return res.data
    
  } catch (e) {
    console.log(e)
  }
}

export const axiosCheckMedia = async () => {
  const data = init()

  try {
    const res = await axios.get(
      `${URL}media.php`, {
      params: {
        id: data.id
      },
      headers: data.headers
    }
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const axiosCheckNaoAvaliados = async () => {

  const data = init()

  try {
    const res = await axios.get(
      `${URL}sem-avaliacao.php`, {
      params: {
        id: data.id
      },
      headers: data.headers
    }
    );

    return res.data
  } catch (e) {
    console.log(e)
  }

  return
}

export async function axiosCheckTrabalhos() {
  const data = init()
  try {
    const res = await axios.get(
      `${URL}avaliados.php`, {
      params: {
        id: data.id
      },
      headers: data.headers
    }
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const axiosAvaliado = async (idProjeto, quest1, quest2, quest3, quest4) => {

  const data = init()

  try {
    const res = await axios.post(
      `${URL}avaliado.php`,
      JSON.stringify({
        avaliador: data.id,
        quest1,
        quest2,
        quest3,
        quest4,
        id_projeto: idProjeto,
      }), {
        headers: data.headers
      }
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const axiosResultado = async () => {
  const data = init()
  try {
    const res = await axios.get(
      `${URL}resultado.php`,
      {
        headers: data.headers
      }
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
};

export const axiosProjeto = async () => {
  const data = init()
  try {
    const res = await axios.get(
      `${URL}projeto.php`,
      {
        params: {
          id: window.sessionStorage.getItem('id'),
          qr: window.sessionStorage.getItem('trabalho')
        }, headers: data.headers
      }
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
}