import { useState } from 'react';
import * as S from './styled';
import Logo from './logo_login.png';

const axios = require('axios').default;

const FormLogin = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const headlerSubmit = (e: any) => {
    e.preventDefault();
  }

  const Check = async (e: any) => {
    const json = await axios.post(
      'https://www4.fag.edu.br/api_summit/rotas/login.php',
      JSON.stringify({
        login: login,
        senha: senha
      })
    )

    const { id, tipo, nome, acesso, token } = json.data

    if (token) {
      window.sessionStorage.setItem('nome', nome);
      window.sessionStorage.setItem('tipo', tipo);
      window.sessionStorage.setItem('acesso', acesso);
      window.sessionStorage.setItem('token', token);
      window.sessionStorage.setItem('isVisible', 'inicial');

      if (acesso == "popular") {
        window.sessionStorage.setItem('id', id);
        window.location.href = '/votopopular';
      } else if (acesso === 'avaliador') {
        window.sessionStorage.setItem('id', id);
        window.location.href = '/avaliacao';
      } else {
        window.location.href = '/resultado';
      }

    } else {
      alert("Login ou senha invalidos.");
    }

  }

  return (
    <S.Container>
      <S.Form onSubmit={headlerSubmit}>
        <img src={Logo} />
        <S.Input type="text" placeholder="Login" value={login} onChange={(e: any) => { setLogin(e.target.value) }} />
        <S.Input type="password" placeholder="Senha" value={senha} onChange={(e: any) => { setSenha(e.target.value) }} />
        <S.Botao onClick={Check}>Entrar</S.Botao>
      </S.Form>
    </S.Container>
  )
};
export default FormLogin;