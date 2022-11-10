import {  useState } from 'react';
import  * as S from './styled';
import Logo from './logo_login.png';

const axios = require('axios').default;

const FormLogin = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  
  

  const headlerSubmit = (e:any) => { 
    e.preventDefault();
  }
  const Check = async (e:any) => {
      const json = axios.post(
        'https://www4.fag.edu.br/api_summit/fag.php',
        JSON.stringify({
          login: login,
          senha: senha,
          PG: 'login'
        })
      )

    const { id_avaliador, tipo, nome,acesso } = (await json).data
    console.log(json)
    if (nome) {
      window.sessionStorage.setItem('nome', nome);
      window.sessionStorage.setItem('tipo', tipo);
      
      window.sessionStorage.setItem('isVisible', 'inicial');
      if(acesso === 'popular'){
        window.sessionStorage.setItem('id_pessoa', id_avaliador);
        window.location.href = '/votopopular';
      }else if(acesso ==='avaliador'){
        window.sessionStorage.setItem('id_avaliador', id_avaliador);
        window.location.href = '/avaliacao';
      }else{
        window.location.href = '/resultado';
      }
      
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
export default FormLogin;