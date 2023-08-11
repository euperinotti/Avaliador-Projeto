import axios from "axios";

const URL = 'https://www4.fag.edu.br/api_summit/src/rotas/'
const config = {
  headers: {
    'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
  }
}

export const axiosLogin = async (login, senha) => {
  return await axios.post(
    `${URL}login.php`,
    JSON.stringify({
      login: login,
      senha: senha
    })
  )
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