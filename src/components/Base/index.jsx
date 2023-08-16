import * as S from './styles'

export const Base = ({ children }) => {
  return (
    <S.Main>
      <S.Content>
        {children}
      </S.Content>
    </S.Main>
  )
}