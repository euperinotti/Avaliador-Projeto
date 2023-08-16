import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resultado from "./components/Resultado";
import SemAvaliacao from "./components/SemAvaliacao";
import VotacaoAberta from "./pages/votacao-aberta";
import Leitor from "./pages/leitor";
import Login from "./pages/login";
import Questao from "./pages/questao";
import CardAcompanhamento from "./components/CardAcompanhamento";
import './app.css';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/avaliacao" element={<CardAcompanhamento />} />
        <Route path="/leitor" element={<Leitor />} />
        <Route path="/questao" element={<Questao />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/semavaliacao" element={<SemAvaliacao />} />
        <Route path="/votopopular" element={<VotacaoAberta />} />
      </Routes>
    </BrowserRouter>
  );
}
