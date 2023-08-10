import * as S from './styles'

export const Base = ({ children }) => {
  return (
    <S.Main>
      <S.Content>
        <div>{children}</div>
      </S.Content>
    </S.Main>
  )
}