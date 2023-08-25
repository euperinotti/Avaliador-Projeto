import * as S from './styles'

export const Base = ({ children, overlay }) => {
  return (
    <S.Main>
      <S.Content overlay={overlay}>
        {children}
      </S.Content>
    </S.Main>
  )
}