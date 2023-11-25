import { useAuth } from './context/auth';

export const Loading = ({ children }) => {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return children;
};
