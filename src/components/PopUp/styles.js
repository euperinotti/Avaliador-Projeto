import styled from "styled-components";
import theme from "../../globalStyles";

export const Overlay = styled.div`
${
  props => props.show ? {visibility: "visible", opacity: 1} : {visibility: "hidden", opacity: 0}
}
  position: absolute;
  width: ${theme.dimensions.allDisplay};
  height: ${theme.dimensions.allDisplay};
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 100ms;
`
export const Popup = styled.div`
  ${theme.misc.thinBorder + theme.colors.fourth};
  ${theme.misc.roundCorners};
  margin: 35% auto;
  padding: ${theme.spacing.small};
  background: ${theme.colors.third};
  width: 90%;
  max-width: 470px;
  position: relative;
  transition: all 100ms ease-in-out;
`

export const Close = styled.span`
  position: absolute;
  top: 20px;
  right: 30px;
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
`