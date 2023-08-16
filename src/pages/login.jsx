import { useEffect, useState } from 'react';
import Form from '../components/Form';
import { Base } from '../components/Base';
import { Input } from '../components/Input';
import { Button } from '../components/Botao';
import { axiosLogin } from '../axios/axios-provider';

const Login = () => {
  useEffect(() => {
    window.sessionStorage.clear();
  }, []);

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    Check();
  }

  const Check = async () => {

    const json = await axiosLogin(login, senha)

    if (json) {
      const { id, tipo, nome, acesso, token } = json;

      window.sessionStorage.setItem('nome', nome);
      window.sessionStorage.setItem('tipo', tipo);
      window.sessionStorage.setItem('acesso', acesso);
      window.sessionStorage.setItem('token', token);

      if (acesso == "popular") {
        window.sessionStorage.setItem('id', id);
        window.location.href = '/votopopular';
      } else if (acesso == 'avaliador') {
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
    <Base>
      <Form onSubmit={(e) => handlerSubmit(e)}>
        <Input
          type="text"
          placeholder="Usuário do Sagres"
          label="Login"
          value={login}
          onChange={(e) => { setLogin(e.target.value) }}
          required
        />

        <Input
          type="password"
          placeholder="Senha do Sagres"
          label="Senha"
          value={senha}
          onChange={(e) => { setSenha(e.target.value) }}
          required
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Base>
  );
}
export default Login;