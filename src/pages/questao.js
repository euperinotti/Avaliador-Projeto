import { useEffect } from "react"
import { BrowserView, MobileView } from "react-device-detect";
import Questoes from '../components/Questoes'
const Questao = () => {

    useEffect(() => {
      if(window.sessionStorage.getItem('id') === null){
        window.location.href = '/';
      }
  },[]);
   return (
    
    <div>
      <BrowserView>
        <h1 style={{ textAlign: "center" }}>
          Esse sistema foi desenvolvido para uso exclusivo pelo Smartphone
        </h1>
      </BrowserView>
      <MobileView>
        <Questoes />        
      </MobileView>
    </div>
  );
}
export default Questao;