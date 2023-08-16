import * as S from './styles'

export const Select = (props) => {
  return (
    <S.Label>{props.className.toUpperCase()}
    <br/>
      <S.Select name={props.name} required>
      {props.children}
    </S.Select>
    </S.Label>
  )
}