import { useEffect, useState } from 'react';
import Form from '../components/Form';
import { Base } from '../components/Base';
import { Input } from '../components/Input';
import { Button } from '../components/Botao';
import { axiosLogin } from '../axios/axios-provider';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { PopUp } from '../components/PopUp';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [visibility, setVisibility] = useState(false);
  const navigate = useNavigate()
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    loginUsuario();
  }
  
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  useEffect(() => {
    window.sessionStorage.clear();
  }, []);

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
      } else if (acesso == 'avaliador') {
        window.sessionStorage.setItem('id', id);
        navigate('/avaliador')
      } else {
        navigate('/resultado')
      }
    } else {
      setVisibility(!visibility)
    }
  }

  return (
    <Base>
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
      <PopUp title={"Acesso Negado"} display={visibility} onClose={popupCloseHandler}>Usuário ou senha inválidos</PopUp>
    </Base>
  );
}
export default Login;