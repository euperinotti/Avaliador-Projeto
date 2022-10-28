import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
// import { Link } from 'react-router-dom';
import FormLogin from '../components/formLogin'
import FormLogin2 from '../components/formLogin2'

const Login = () => {
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