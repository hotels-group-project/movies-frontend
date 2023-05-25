export const BASE_URL = 'http://localhost:5000';

// const getToken = () => localStorage.getItem('token');

const checkResponse = (res: Response) => {
  if (res) {
    return res.json();
  }
  return Promise.reject(`Ошибка`);
};

export const getGenres = () => {
  return fetch(`${BASE_URL}/genres`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => checkResponse(res));
};

export const getCountries = () => {
  return fetch(`${BASE_URL}/countries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => checkResponse(res));
};

export const findMovies = (
  genres: string,
  years: string,
  countries: string,
  rating: string,
  votes: string,
  producer: string,
  actor: string,
  page: string,
) => {
  return fetch(
    `${BASE_URL}/movies/search?genres=${genres}&year=${years}&country=${countries}&rating=${rating}&marksCount=${votes}&actor=${actor}&director=${producer}&page${page}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then(res => checkResponse(res));
};

export const findPersons = (profession: string, name: string) => {
  return fetch(`${BASE_URL}/profession/search?profession=${profession}&name=${name}`, {
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

export const getPersonsForSlider = () => {
  return fetch(`${BASE_URL}/personsForSlider`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => checkResponse(res));
};
