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

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:1rem;
  margin:0 auto;
  margin-top:18%;
  width:16%;
  @media (max-width:728px){
    width:44%;

  }
  img{
    width:30rem;
  }
  @media (max-width:728px){
    img{
      width:20rem;
    }
  }
  select{
    height:2rem;
    font-size:1rem;
  }
  @media (max-width:728px){
    select{
      width:25rem;
    }

  }
  h1{
    color:#fff;
  }
  p{
    width:200%;
    color:#fff;
  }
`
export const Input = styled.input`
  height:2rem;
  padding-left:1rem;
  border-radius:0.5rem;
  border:none;
  width:80%;
  margin:0 auto;


`
export const Botao = styled.button`

  // padding: 1rem 0.3rem 1rem 0.3rem;
  height:2rem;
  width:85%;
  margin:0 auto;
  border-radius:0.5rem;
  border:none;
  background-color:#228CC8;
  color:#fff;

`