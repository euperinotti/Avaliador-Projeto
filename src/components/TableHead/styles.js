import styled from "styled-components"
import theme from "../../globalStyles"

export const TableHead = styled.thead`
  background-color: ${theme.colors.white};
  text-align: center;
  width: 100%;
  font-weight: bold;
  color: ${theme.colors.blue};
  height: 3rem;
`

export const Row = styled.tr`
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid white;
`