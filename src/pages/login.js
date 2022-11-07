import React, { useEffect } from 'react'
import { BrowserView, isWindows, MobileView } from 'react-device-detect';
// import { Link } from 'react-router-dom';
import FormLogin from '../components/formLogin'
import FormLogin2 from '../components/formLogin2'

const Login = () => {
  useEffect(()=>{
    window.sessionStorage.removeItem('nome');
    window.sessionStorage.removeItem('id_pessoa');
    window.sessionStorage.removeItem('id_avaliador');
    window.sessionStorage.removeItem('nome');
    window.sessionStorage.removeItem('tipo');
    window.sessionStorage.removeItem('isVisible');
  },[]);
  return (
    <div>
    <BrowserView>
    <FormLogin2/>
  </BrowserView>
  < MobileView >
  <FormLogin/>
  </MobileView>

  </div>
  );
}
export default Login;