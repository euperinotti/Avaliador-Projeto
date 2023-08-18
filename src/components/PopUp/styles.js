import styled from "styled-components";

export const Overlay = styled.div`
${
  props => props.show ? {visibility: "visible", opacity: 1} : {visibility: "hidden", opacity: 0}
}
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 100ms;
`
export const Popup = styled.div`
  margin: 35% auto;
  padding: 1rem;
  background: #485A70;
  border-radius: 20px;
  border: 1px solid #6A82A0;
  width: fit-content;
  position: relative;
  transition: all 100ms ease-in-out;
  max-width: 470px;
  width: 90%;
`

export const Close = styled.span`
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 100ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  :hover {
  cursor: pointer;
}
`

export const Content = styled.div`
  color: white;
  text-align: center;
`