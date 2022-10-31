import { render } from "react-dom";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import App from "./App";
import Leitor from "./components/Leitor";
import Resultado from "./components/Resultado";
import Avaliacao from "./pages/avaliacao";
import Login from "./pages/login";
import Questao from "./pages/questao";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/avaliacao" element={<Avaliacao />} />
      <Route path="/leitor" element={<Leitor />} />
      <Route path="/questao" element={<Questao />} />
      <Route path="/resultado" element={<Resultado />} />
    </Routes>
  </BrowserRouter>
  , rootElement);
