import * as S from './styles'

export const Button = (props) => {
  return <S.Button onClick={props.onClick}>{props.children}</S.Button> 
}