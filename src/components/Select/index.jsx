import * as S from './styles'

export const Select = (props) => {
  return (
    <S.Select onChange={props.onChange} name={props.name} required>
      {props.children}
    </S.Select>
  )
}