import {  useState } from 'react';
import  * as S from './styled';
import Logo from './logo_login.png';

const axios = require('axios').default;

const FormLogin2 = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  
  

  const headlerSubmit = (e:any) => { 
    e.preventDefault();
  }
  const Check = async () => {
      const json = axios.post(
        'https://www4.fag.edu.br/api_summit/fag.php',
        JSON.stringify({
          login: login,
          senha: senha,
          PG: 'loginSagres'
        })
      )

    const { id_pessoa } = (await json).data
    console.log(json.data)
    if (id_pessoa) {
      window.sessionStorage.setItem('id_pessoa', id_pessoa);
      window.location.href = '/avaliacao';
    } else {
      alert("Login ou senha invalidos.");
    }
        
  }
  return (
    <S.Container>
      
      <S.Form onSubmit={headlerSubmit}>
        <img src={Logo}/>
        <S.Input type="text" placeholder="Login" value={login} onChange={(e:any) =>{setLogin(e.target.value)}}/>
        <S.Input type="password" placeholder="Senha" value={senha} onChange={(e:any) =>{setSenha(e.target.value)}}/>
        <S.Botao onClick={Check}>Entrar</S.Botao>
      </S.Form>
      
    </S.Container>
    
    
  )
};
export default FormLogin2;