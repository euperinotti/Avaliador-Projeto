import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosLogin } from '../axios/axios-provider';
import { Base, Input, Button, Logo, PopUp, Form } from '../components';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    window.sessionStorage.clear()
  }, [])

  const handlerSubmit = async (e) => {
    e.preventDefault();
    await loginUsuario();
  }

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const loginUsuario = async () => {
    const json = await axiosLogin(login, senha)

    if (json) {
      const { id, tipo, nome, acesso, token } = json;

      window.sessionStorage.setItem('nome', nome);
      window.sessionStorage.setItem('tipo', tipo);
      window.sessionStorage.setItem('acesso', acesso);
      window.sessionStorage.setItem('token', token);

      if (acesso == "popular") {
        window.sessionStorage.setItem('id', id);
        navigate('/votopopular')
      } else {
        window.sessionStorage.setItem('id', id);
        navigate('/avaliador')
      }
    } else {
      setVisibility(!visibility)
    }
  }

  return (
    <Base overlay={true}>
      <PopUp title={"Acesso Negado"} display={visibility} onClose={popupCloseHandler}>Usuário ou senha inválidos</PopUp>
      <Logo />
      <Form onSubmit={(e) => handlerSubmit(e)}>
        <Input
          type="text"
          placeholder="Usuário do Sagres"
          label="Usuário"
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