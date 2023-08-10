import * as S from './styles'

export const Input = (props) => {
  return <S.Campo
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}

  />
}