import { fetchApi } from '../data/fetchApi';

export const getUser = async () => {
  try {
    const user = await fetchApi('/user');

    return user;
  } catch (error) {
    return null;
  }
};

export const signInUser = async (ra, password) => {
  const response = await fetchApi('/session', {
    method: 'POST',
    body: JSON.stringify({ ra, password }),
  });

  return response;
};

export const logoutUser = async () => {
  const response = await fetchApi('/session', {
    method: 'DELETE',
  });

  return response;
};
