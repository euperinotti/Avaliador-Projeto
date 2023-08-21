import styled from "styled-components";
import theme from "../../globalStyles";

export const Button = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  border:none;
  width: max-content;
  padding: 0 2rem;
  background-color: ${theme.colors.white};
  color: #228CC8;
  outline: none;
  cursor: pointer;
  font-size: ${theme.font.size.small};
  transition: 200ms;

  :hover {
    background-color: #165e87;
    color: ${theme.colors.white};
  }
`