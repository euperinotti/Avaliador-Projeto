import { TableHead } from '../TableHead'
import * as S from './styles'

export const Tabela = ({ resultado, categoria, colunas }) => {
  return (
    <S.Container>
      <S.Heading>{categoria}</S.Heading>
      <S.Table>
        <TableHead>
          {colunas.map((e, key) => <S.Column key={key}>{e}</S.Column>)}
        </TableHead>

        <S.TableBody>
          {resultado.map((row, key) => (
            <S.Row key={key}>
              <S.Column>{row.titulo}</S.Column>
              <S.Column>{row.notaPopular}</S.Column>
              <S.Column>{row.nota}</S.Column>
            </S.Row>
          ))
          }
        </S.TableBody>
      </S.Table>
    </S.Container>
  )
}