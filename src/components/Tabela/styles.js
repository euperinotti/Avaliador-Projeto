import styled from "styled-components";
import theme from "../../globalStyles";

export const Table = styled.table`
  text-align: center;
  width: 100%;
  font-size: ${theme.font.size.small};
  border-radius: 20px;
  border: 2px solid white;
`

export const Column = styled.td`
  width: 25%;
`

export const Row = styled.tr`
  text-align: center;
  height: 4rem;
  padding: ${theme.spacing.small} 0;
  border-bottom: 1px solid white;
`

export const TableBody = styled.tbody`
  color: ${theme.colors.white};
`

export const Heading = styled.h2`
  color: ${theme.colors.white};
`

export const Container = styled.div`
  width: 100%;
`