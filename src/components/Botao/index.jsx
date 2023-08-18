import * as S from './styles'

export const Button = ({ onClick, children }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>
}