import styled from "styled-components";

export const Button = styled.button`
  height: 2.5rem;
  border-radius:0.5rem;
  border:none;
  width: max-content;
  padding: 0 2rem;
  margin:0 auto;
  background-color: #228CC8;
  color: #fff;
  outline: none;
  cursor: pointer;
  font-size: large;
  transition: 200ms;

  :hover {
    background-color: #165e87;
  }

  :focus {
    outline: red;
  }
`