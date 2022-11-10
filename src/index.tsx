import { render } from "react-dom";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import App from "./App";
import Leitor from "./components/Leitor";
import Resultado from "./components/Resultado";
import Avaliacao from "./pages/avaliacao";
import Login from "./pages/login";
import Questao from "./pages/questao";
import SemAvaliacao from "./components/SemAvaliacao";
import VotacaoAberta from "./components/VotacaoAberta";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/avaliacao" element={<Avaliacao />} />
      <Route path="/leitor" element={<Leitor />} />
      <Route path="/questao" element={<Questao />} />
      <Route path="/resultado" element={<Resultado />} />
      <Route path="/semavaliacao" element={<SemAvaliacao />} />
      <Route path="/votopopular" element={<VotacaoAberta/>}/>
    </Routes>
  </BrowserRouter>
  , rootElement);
