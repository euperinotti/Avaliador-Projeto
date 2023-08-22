import styled from "styled-components";
import theme from "../../globalStyles";

export const Overlay = styled.div`
${
  props => props.show ? {visibility: "visible", opacity: 1} : {visibility: "hidden", opacity: 0}
}
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(0, 0, 0, 0.4);
  transition: opacity 100ms;
  z-index: 1;
`
export const Popup = styled.div`
  ${theme.misc.thinBorder + theme.colors.third};
  ${theme.misc.roundCorners};
  padding: ${theme.spacing.small};
  background: ${theme.colors.second};
  width: 90%;
  max-width: 470px;
  position: relative;
  margin: 20% auto;
  transition: all 100ms ease-in-out;
`

export const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  transition: all 100ms;
  font-size: ${theme.font.size.medium};
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
  font-size: large;
`

export const Heading = styled.h3`
  text-align: center;
  color: white;
`