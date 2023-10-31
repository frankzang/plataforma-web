const BASE_URL = 'http://localhost:3000';

/**
 * @type {RequestInit}
 */
const DEFAULT_REQUEST_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

export const fetchApi = async (url, options) => {
  const fetchOptions = {
    ...DEFAULT_REQUEST_OPTIONS,
    ...options,
  };
  const response = await fetch(`${BASE_URL}${url}`, fetchOptions);

  if (!response.ok) throw new Error('Api error');

  const data = await response.json();

  return data;
};
