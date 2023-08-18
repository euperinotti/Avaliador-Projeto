import * as S from './styles'
import { TableHead } from '../TableHead'

export const Tabela = ({ notasAvaliadores, categoria, votoPopular, colunas }) => {

  // if (categoria == "1") {
  //   heading = "Produto"
  // }

  // if (categoria == "2") {
  //   heading = "Solução"
  // }

  // if (categoria == "3") {
  //   heading = "Aplicativo"
  // }

  return (
    <>
      <S.Heading>{categoria}</S.Heading>
      <S.Table>
        <TableHead>
          {colunas.map((e, key) => <S.Column key={key}>{e}</S.Column>)}
        </TableHead>

        <S.TableBody>
          {notasAvaliadores.map((row) => (
            <S.Row>
              <S.Column>{row.titulo}</S.Column>
              <S.Column>
                {votoPopular.map((nt, key) => (
                  nt.id_projeto === row.id_projeto ? nt.voto : '-'
                ))}
              </S.Column>
              <S.Column>{row.nota}</S.Column>
            </S.Row>
          ))
          }

        </S.TableBody>

      </S.Table>
    </>
  )
}