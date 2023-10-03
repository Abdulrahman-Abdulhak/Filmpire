import axios from 'axios';

const tmdbApiKey = import.meta.env.VITE_API_KEY;

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tmdbApiKey}`,
  },
});

export const requestToken = async () => {
  try {
    const { data } = await moviesApi.get('authentication/token/new');

    const token = data.request_token;
    if (!data.success) return;

    localStorage.setItem('request_token', token);

    window.open(`https://www.themoviedb.org/authenticate/${token}`, '_blank');
  } catch (error) {
    console.error(error);
  }
};

export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');
  if (!token || token.toLocaleLowerCase() === 'undefined') return;

  try {
    const { data } = await moviesApi.post('authentication/session/new', {
      request_token: token,
    });
    // console.log(data);

    if (!data.success) return;

    const sessionId = data.session_id;
    localStorage.setItem('session_id', sessionId);

    return sessionId;
  } catch (error) {
    console.error(error);
  }
};

export const getUserBySessionId = async (sessionId) => {
  if (!sessionId || sessionId.toLocaleLowerCase() === 'undefined') return;

  try {
    const { data } = await moviesApi.get(`account/${sessionId}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
