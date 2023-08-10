import { useEffect } from 'react';
import FormLogin from '../components/formLogin';
import { Base } from '../components/Base';

const Login = () => {
  useEffect(() => {
    window.sessionStorage.removeItem('nome');
    window.sessionStorage.removeItem('id_pessoa');
    window.sessionStorage.removeItem('id_avaliador');
    window.sessionStorage.removeItem('nome');
    window.sessionStorage.removeItem('tipo');
  }, []);
  
  return (
    <Base>
      <FormLogin />
    </Base>
  );
}
export default Login;