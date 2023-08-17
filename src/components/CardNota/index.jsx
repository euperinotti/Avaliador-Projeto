import * as S from './styles'

export const CardNota = ({ titulo, nota, onClick }) => {
  return (
    <S.Number onClick={onClick}>
      <S.Text>{titulo}:</S.Text>
      <S.Nota>{nota}</S.Nota>
    </S.Number>
  )
}