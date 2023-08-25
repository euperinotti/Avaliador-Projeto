import { useEffect, useState } from "react"
import { Base, Heading, List } from "../components"
import { axiosCheckNaoAvaliados } from "../axios/axios-provider"

const SemAvaliacao = () => {
  const [quantidade, setQuantidade] = useState(0)
  const [projetos, setProjetos] = useState([])

  useEffect(() => {
    async function fetchData() {
      const json = await axiosCheckNaoAvaliados()

      if (json) {
        setQuantidade(json.quantidade)
        setProjetos(json.projetos)
      }
    }

    fetchData()
  }, [])

  return (
    <Base>
      <Heading>Sem Avaliação - {quantidade}</Heading>
      <List data={projetos}/>
    </Base>
  )
}

export default SemAvaliacao