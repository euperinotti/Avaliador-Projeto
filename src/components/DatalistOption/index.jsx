import * as S from './styles'

export const DatalistOption = ({ value, children }) => {
  return <S.Option value={value}>{children}</S.Option>
}