import * as S from './styles'
import { TableHead } from '../TableHead'

export const Tabela = ({ resultado, categoria, colunas }) => {
  return (
    <>
      <S.Heading>{categoria}</S.Heading>
      <S.Table>
        <TableHead>
          {colunas.map((e, key) => <S.Column key={key}>{e}</S.Column>)}
        </TableHead>

        <S.TableBody>
          {resultado.map((row) => (
            <S.Row>
              <S.Column>{row.titulo}</S.Column>
              <S.Column>{row.notaPopular}</S.Column>
              <S.Column>{row.nota}</S.Column>
            </S.Row>
          ))
          }

        </S.TableBody>

      </S.Table>
    </>
  )
}