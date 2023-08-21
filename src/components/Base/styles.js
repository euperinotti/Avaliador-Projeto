import styled from "styled-components";
import theme from '../../globalStyles'

export const Main = styled.div`
  ${theme.align.flexCenter};
  width: ${theme.dimensions.allDisplay};
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
  max-height: 80vh;
  flex-direction: column;
  padding: ${theme.spacing.medium};
  margin: 0 ${theme.spacing.small};
`