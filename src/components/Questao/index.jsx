import { Datalist } from '../Datalist';
import * as S from './styles'

export const Questao = ({ titulo, label, value, onChange }) => {
  return (
    <S.Text>
      {titulo}
      <br />
      <br />
      <input
        type="range"
        min={0}
        max={10}
        label={label}
        value={value}
        onChange={onChange}
        list="tickmarks"
        className="slider"
      />
      <Datalist />
    </S.Text>
  )
}