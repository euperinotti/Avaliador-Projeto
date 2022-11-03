import styled from 'styled-components';


export const Card = styled.section`
  display:flex;
  flex-direction:column;  
  
  width:90%;
  margin :0 auto;
  box-sizing : border-box;
  h4{
    text-align: center;

    padding-bottom:15px;
    color:#fff;
    font-size:2rem;
    
  }
`
export const Number = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  margin-top:-15px;
  margin-bottom:5%;


`
export const Text = styled.p`
  display:flex;
  flex-direction: column;
  justify-content: center;
  width:45%;
  background-color: #fff;
  height:6rem;
  border-radius:1rem;
  padding-top:1%;
  font-size:0.8rem;
  text-align:center;

  strong{
    font-size:1.8rem;
  }
`