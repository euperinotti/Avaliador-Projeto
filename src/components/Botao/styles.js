import styled from "styled-components";
import theme from "../../globalStyles";

export const Button = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  border: none;
  width: max-content;
  padding: 0 2rem;
  margin: 0 auto;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  outline: none;
  cursor: pointer;
  font-size: ${theme.font.size.small};
  transition: 200ms;

  :hover {
    background-color: #165e87;
  }
`