import styled from 'styled-components';

export const Container = styled.section`
  width:80%;
  margin:0 auto;
@media (max-width:728px){
  width:100%;
  margin:0 auto;
}

`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 30px;
`

export const Heading = styled.h1`
  color: white;
`

export const Paragraph = styled.p`
  color: white;
  font-size: larger;
  width: 75%;
  text-align: center;
`