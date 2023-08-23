import axios from "axios";

const URL = 'https://www4.fag.edu.br/api_summit/src/rotas/'
const config = {
  headers: {
    'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
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
  return await axios.post(
    `${URL}voto-popular.php`,
    JSON.stringify({
      id_projeto: voto,
      id_pessoa: idPessoa
    }),
    config
  );
}

export const axiosParticipantes = async () => {

  try {
    const res = await axios.get(
      `${URL}participantes.php`,
      config
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const axiosCheckVoto = async () => {
  console.log(window.sessionStorage.getItem('id'))
  console.log(window.sessionStorage.getItem('token'))

  const res = await axios.post(
    `${URL}check-voto-popular.php`,
    JSON.stringify({
      id: window.sessionStorage.getItem('id'),
    }),
    config
  );

  return res.data
}

export const axiosCheckMedia = async (id) => {
  return await axios.get(
    `${URL}media.php`, {
    params: {
      id: id
    },
    headers: config.headers
  }
  );
}

export const axiosCheckNaoAvaliados = async () => {
  return await axios.get(
    `${URL}sem-avaliacao.php`, {
    params: {
      id: window.sessionStorage.getItem('id')
    },
    headers: config.headers
  }
  );
}

export const axiosCheckTrabalhos = async (id) => {
  return await axios.get(
    `${URL}avaliados.php`, {
    params: {
      id: id
    },
    headers: config.headers
  }
  );
}

export const axiosAvaliado = async (idProjeto, quest1, quest2, quest3, quest4) => {
  try {
    const res = await axios.post(
      `${URL}avaliado.php`,
      JSON.stringify({
        avaliador: window.sessionStorage.getItem('id'),
        quest1,
        quest2,
        quest3,
        quest4,
        id_projeto: idProjeto,
      }), config
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const axiosResultado = async () => {
  try {
    const res = await axios.get(
      `${URL}resultado.php`,
      config
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
};

export const axiosProjeto = async () => {
  try {
    const res = await axios.get(
      `${URL}projeto.php`,
      {
        params: {
          id: window.sessionStorage.getItem('id'),
          qr: window.sessionStorage.getItem('trabalho')
        }, headers: config.headers
      }
    );

    return res.data
  } catch (e) {
    console.log(e)
  }
}