import styled from "styled-components";
import media from "styled-media-query"
import theme from '../../globalStyles'

export const Main = styled.div`
  ${theme.align.flexCenter};
  width: ${theme.dimensions.viewWidth};
  min-height: ${theme.dimensions.viewHeight};
  background-color: ${theme.colors.main};
  padding: ${theme.spacing.small} 0;
  flex-wrap: wrap;
`

export const Content = styled.div`
  ${theme.misc.roundCorners};
  ${theme.align.flexCenter};
  background-color: ${theme.colors.second};
  width: fit-content;
  height: fit-content;
  flex-direction: column;
  padding: ${theme.spacing.medium};
  margin: 0 ${theme.spacing.small};
  overflow: visible;

  ${
    props => props.overlay ? { maxHeight: "100vh", justifyContent: "center"} : {maxHeight: "80vh", justifyContent: "flex-start"}
  }

  ${media.lessThan("medium")`
    overflow: scroll;
  `}
`