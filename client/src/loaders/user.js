import { redirect } from 'react-router-dom';
import { fetchApi } from '../data/fetchApi';

export const loadUser = async () => {
  try {
    const user = await fetchApi('/user');

    if (!user) {
      return redirect('/login');
    }
    return user;
  } catch (error) {
    return redirect('/login');
  }
};

export const signInUser = async (ra, password) => {
  const response = await fetchApi('/session', {
    method: 'POST',
    body: JSON.stringify({ ra, password }),
  });

  return response;
};
