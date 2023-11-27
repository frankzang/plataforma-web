import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Eventos from '../src/pages/Eventos';
import EventosInfor from '../src/pages/EventsInfor';

import Central from './pages/Central';
import Login from './pages/Login';
import { AuthProvider } from './context/auth.jsx';
import { ProtectedRoute } from './protectedRoutes.jsx';
import { Loading } from './loading.jsx';
import { SWRConfig } from 'swr';
import { Main } from './components/sidebar.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import Grades from './pages/Notas/index.jsx';
import Frequency from './pages/Frequencia/index.jsx';

function App() {
  return (
    <SWRConfig>
      <ChakraProvider>
        <AuthProvider>
          <Loading>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<ProtectedRoute />}>
                  <Route
                    path="/"
                    element={
                      <Main>
                        <Central />
                      </Main>
                    }
                  />
                </Route>
                <Route path="/grades" element={<ProtectedRoute />}>
                  <Route
                    path="/grades"
                    element={
                      <Main>
                        <Grades />
                      </Main>
                    }
                  />
                </Route>
                <Route path="/frequency" element={<ProtectedRoute />}>
                  <Route
                    path="/frequency"
                    element={
                      <Main>
                        <Frequency />
                      </Main>
                    }
                  />
                </Route>
                <Route path="/eventos" element={<ProtectedRoute />}>
                  <Route
                    path="/eventos"
                    element={
                      <Main>
                        <Eventos />
                      </Main>
                    }
                  />
                </Route>
                <Route path="/eventInfor/:id" element={<ProtectedRoute />}>
                  <Route
                    path="/eventInfor/:id"
                    element={
                      <Main>
                        <EventosInfor />
                      </Main>
                    }
                  />
                </Route>
                <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </Loading>
        </AuthProvider>
      </ChakraProvider>
    </SWRConfig>
  );
}

export default App;
