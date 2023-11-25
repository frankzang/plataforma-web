import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/auth';

export const ProtectedRoute = () => {
  const { user } = useAuth();

  console.log({ user });

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
