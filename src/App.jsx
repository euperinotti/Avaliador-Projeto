import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resultado from "./pages/resultado";
import SemAvaliacao from "./components/SemAvaliacao";
import VotacaoAberta from "./pages/votacao-aberta";
import Leitor from "./pages/leitor";
import Login from "./pages/login";
import Questao from "./pages/questao";
import Avaliador from "./pages/avaliador";
import './app.css';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/avaliador" element={<Avaliador />} />
        <Route path="/leitor" element={<Leitor />} />
        <Route path="/questao" element={<Questao />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/semavaliacao" element={<SemAvaliacao />} />
        <Route path="/votopopular" element={<VotacaoAberta />} />
      </Routes>
    </BrowserRouter>
  );
}
