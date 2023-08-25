import { Button } from "../components/Botao"
import { PopUp } from "../components/PopUp"
import { useNavigate } from "react-router-dom"

export const auth = () => {
  if ((window.sessionStorage.getItem('id') || window.sessionStorage.getItem('token')) == null) {
    return {
      status: false,
      message: "Usuário não autenticado"
    }
  }

  return {
    status: true,
    message: "Usuário autenticado"
  }
}

export const authAvaliador = () => {
  if (auth()) {
    if (window.sessionStorage.getItem('acesso') != 'avaliador') {
      return {
        status: false,
        message: "Acesso restrito aos avaliadores"
      }
    }

    return {
      status: true,
      message: "Acesso Autorizado"
    }
  }

  return {
    status: true,
    message: "Acesso Não Autorizado"
  }
}

export const AuthPopup = ({ message, link }) => {

  const navigate = useNavigate()

  return (
    <PopUp
      title={"Acesso Negado"}
      display={true}
      onClose={(e) => { link ? navigate(link) : navigate('/') }}
    >
      {message}
      <br />
      <br />
      <Button onClick={(e) => { link ? navigate(link) : navigate('/') }}>Voltar</Button>
    </PopUp>
  )
}