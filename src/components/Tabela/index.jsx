import * as S from './styles'

export const Tabela = ({ notasAvaliadores, categoria, votoPopular }) => {

  let heading = ""

  if (categoria == "1") {
    heading = "Produto"
  }

  if (categoria == "2") {
    heading = "Solução"
  }

  if (categoria == "3") {
    heading = "Aplicativo"
  }

  return (
    <>
      <S.Heading>{heading}</S.Heading>
      <S.Table>
        <S.TableHead>
          <S.Row>
            <S.Column>Trabalho</S.Column>
            <S.Column>Voto popular</S.Column>
            <S.Column>Nota Final</S.Column>
          </S.Row>
        </S.TableHead>

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