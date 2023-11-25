import { createContext, useEffect, useMemo, useState } from 'react';
import { getUser } from '../loaders/user';
import { useContext } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoaded,
      setUser,
    }),
    [user, isLoaded]
  );

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
