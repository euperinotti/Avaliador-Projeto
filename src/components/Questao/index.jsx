import { Datalist } from '../Datalist';
import { InputRange } from '../InputRange';
import * as S from './styles'

export const Questao = ({ titulo, label, value, onChange }) => {
  return (
    <S.Container>
      <S.Text>{titulo}</S.Text>
      <InputRange
        label={label}
        value={value}
        onChange={onChange}
      />
      <Datalist />
    </S.Container>
  )
}