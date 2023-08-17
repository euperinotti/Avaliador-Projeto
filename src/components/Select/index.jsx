import * as S from './styles'
import { Option } from '../Option'

export const Select = ({ label, name, data, categoria }) => {
  return (
    <S.Label><strong>{label.toUpperCase()}</strong>
      <br />
      <S.Select name={name} required>
        {data.map((e, index) => {
          if (e.categoria == categoria) {
            return (<Option value={e.id_projeto} key={index}>{e.titulo}</Option>)
          }
        })}
      </S.Select>
    </S.Label>
  )
}