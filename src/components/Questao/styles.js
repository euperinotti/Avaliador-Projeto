import styled from "styled-components"

export const Text = styled.p`
  display:flex;
  flex-direction: column;
  justify-content: center;
  width:100%;
  background-color: #fff;
  
  border-radius:1rem;
  padding:10px;
  font-size:1rem;
  text-align:center;

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