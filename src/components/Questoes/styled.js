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
    font-size:1.3rem;
    
  }
`
export const Number = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  margin-top:-15px;


`
export const Text = styled.p`
  display:flex;
  flex-direction: column;
  justify-content: center;
  width:95%;
  background-color: #fff;
  
  border-radius:1rem;
  padding:10px;
  font-size:1rem;
  text-align:center;
  datalist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;


    }

    option {
  padding-left:6px;
  font-size:0.7rem;
  }



// input[type='range']::-webkit-slider-runnable-track {
  
//   
  
//   border-radius: 60px;
// }
.slider {
  -webkit-appearance: none;
  width: 100%;
  height:16px;
 background-image: linear-gradient(to right, #ff6e1b, #eb8f00, #c9ad00, #96c800, #35df00);
  opacity: 1;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius:20px;
}


.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  margin-top:-5px;
  width: 20px;
  height: 20px;
  background: #000;
  cursor: pointer;
  border-radius:20px;
}

.slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: #000;
  cursor: pointer;
  border-radius:20px;
}

`
export const Botao = styled.button`


  height:3rem;
  width:85%;
  margin-left:2rem;
  margin-top:1rem;
    border-radius:0.5rem;
  border:none;
  background-color:#228CC8;
  color:#fff;
  font-size:1rem;

`