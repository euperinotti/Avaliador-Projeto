import * as S from './styles'

export const Select = (props) => {
  return (
    <S.Select onChange={props.onChange} required>
      {props.children}
    </S.Select>
  )
}