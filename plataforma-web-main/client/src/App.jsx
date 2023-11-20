import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from '../src/pages/PaginaInicial/index.tsx';
import Eventos from '../src/pages/Eventos/index.tsx';
import Central from '../src/pages/Central/index.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PaginaInicial />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/central" element={<Central />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
