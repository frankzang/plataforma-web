import { createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/login';
import { Home } from './pages/home';
import { loadUser } from './loaders/user';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: loadUser,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
