import styled from 'styled-components';
import theme from '../../globalStyles';

export const Number = styled.div`
  height: fit-content;
  width: 30%;
`

export const Text = styled.p`
  font-size: ${theme.font.size.xsmall};
  text-align: center;
  width: 100%;
  color: white;
`

export const Nota = styled.h2`
  text-align: center;
  color: white;
  font-size: ${theme.font.size.giant};
  margin: 0;
`