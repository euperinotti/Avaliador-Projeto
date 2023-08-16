import * as S from './styles'

export const Option = (props) => {
  return (
    <S.Option value={props.value}>
      {props.children}
    </S.Option>
  )
}