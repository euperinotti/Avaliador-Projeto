import * as S from './styles'

export const List = ({data}) => {
  return (
    <S.Ul>
      {data.map((row, key) => (
        <S.Li key={key}>{row.titulo}</S.Li>
      ))}
    </S.Ul>
  )
}