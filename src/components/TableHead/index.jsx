import * as S from './styles'

export const TableHead = ({ children }) => {
  return (
    <S.TableHead>
      <S.Row>
        {children}
      </S.Row>
    </S.TableHead>
  )
}