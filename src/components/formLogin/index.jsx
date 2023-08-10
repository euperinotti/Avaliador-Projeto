import { useState } from 'react';
import { Logo } from '../Logo';
import { Input } from './input';
import { Button } from '../Botao';
import * as S from './styled';

const axios = require('axios').default;

const FormLogin = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    Check();
  }

  const Check = async (e) => {
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
    <S.Form onSubmit={handlerSubmit}>
      <Logo />
      <Input type="text" placeholder="Login" value={login} onChange={(e) => { setLogin(e.target.value) }} />
      <Input type="password" placeholder="Senha" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
      <Button type="submit">Entrar</Button>
    </S.Form>
  )
};

export default FormLogin;