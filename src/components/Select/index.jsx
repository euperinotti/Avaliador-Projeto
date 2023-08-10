import * as S from './styles'

export const Select = (props) => {
  return (
    <S.Select name={props.name} required>
      {props.children}
    </S.Select>
  )
}