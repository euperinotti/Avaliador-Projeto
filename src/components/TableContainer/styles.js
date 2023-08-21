import styled from "styled-components";
import media from "styled-media-query"

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 80vh;

  ${media.greaterThan("medium")`
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
  `}

  ${media.lessThan("medium")`
    overflow: scroll;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  `}
`