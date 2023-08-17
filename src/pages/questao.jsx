import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Questoes from '../components/Questoes';
const Questao = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.sessionStorage.getItem('id') === null && window.sessionStorage.getItem('acesso') != 'avaliador') {
      navigate('/');
    }
  }, []);

  return (
    <Questoes />
  )
}
export default Questao;