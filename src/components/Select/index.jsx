import * as S from './styles'

export const Select = (props) => {
  return (
    <S.Label><strong>{props.className.toUpperCase()}</strong>
    <br/>
      <S.Select name={props.name} required>
      {props.children}
    </S.Select>
    </S.Label>
  )
}