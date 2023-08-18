import { Button } from "../components/Botao"
import { PopUp } from "../components/PopUp"
import { useNavigate } from "react-router-dom"

const auth = () => {
  if (window.sessionStorage.getItem('id') == null || window.sessionStorage.getItem('token') == null) {
    return {
      status: false,
      message: "Usuário não autenticado"
    }
  }

  if (window.sessionStorage.getItem('acesso') != 'avaliador') {
    return {
      status: false,
      message: "Acesso restrito aos avaliadores"
    }
  }
  
  return {
    status: true,
    message: "Usuário autenticado"
  }
}

export const AuthPopup = () => {

  const message = auth().message
  const navigate = useNavigate()

  return (
    <PopUp
        title={"Acesso Negado"}
        display={true}
        onClose={(e) => { navigate('/') }}
      >
        {message}
        <Button onClick={(e) => { navigate('/') }}>Voltar ao login</Button>
      </PopUp>
  )
}

export default auth