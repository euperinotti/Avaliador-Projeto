import * as S from './styles'

export const ButtonResult = (props) => {
  return <S.Button onClick={props.onClick}>{props.children}</S.Button> 
}