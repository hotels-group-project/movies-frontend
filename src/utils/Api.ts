export const BASE_URL = 'http://localhost:5000';

// const getToken = () => localStorage.getItem('token');

const checkResponse = (res: Response) => {
  if (res) {
    return res.json();
  }
  return Promise.reject(`Ошибка`);
};

export const getGenres = () => {
  return fetch(`${BASE_URL}/movies/genres`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => checkResponse(res));
};

export const getCountries = () => {
  return fetch(`${BASE_URL}/movies/countries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => checkResponse(res));
};

export const findMovies = (genres: string, years: string, countries: string, page: string) => {
  return fetch(`${BASE_URL}/movies/search?genres=${genres}&year=${years}&country=${countries}&page${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => checkResponse(res));
};

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies/mainPage`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => checkResponse(res));
};
