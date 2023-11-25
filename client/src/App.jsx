import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from '../src/pages/PaginaIniciaL';
import Eventos from '../src/pages/Eventos';
import Central from './pages/Central';
import Login from './pages/Login';
import { AuthProvider } from './context/auth.jsx';
import { ProtectedRoute } from './protectedRoutes.jsx';
import { Loading } from './loading.jsx';

function App() {
  return (
    <AuthProvider>
      <Loading>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/" element={<PaginaInicial />} />
            </Route>
            <Route path="/eventos" element={<ProtectedRoute />}>
              <Route path="/eventos" element={<Eventos />} />
            </Route>
            <Route path="/central" element={<ProtectedRoute />}>
              <Route path="/central" element={<Central />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Loading>
    </AuthProvider>
  );
}

export default App;
