import { BrowserRouter, Route, Routes } from "react-router-dom";
import SemAvaliacao from "./components/SemAvaliacao";
import Avaliador from "./pages/avaliador";
import Leitor from "./pages/leitor";
import Login from "./pages/login";
import Resultado from "./pages/resultado";
import VotacaoAberta from "./pages/votacao-aberta";
import AvaliacaoProjeto from "./pages/avaliacao-projeto";
import './app.css';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/avaliador" element={<Avaliador />} />
        <Route path="/leitor" element={<Leitor />} />
        <Route path="/avaliacao-projeto" element={<AvaliacaoProjeto />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/semavaliacao" element={<SemAvaliacao />} />
        <Route path="/votopopular" element={<VotacaoAberta />} />
      </Routes>
    </BrowserRouter>
  );
}
