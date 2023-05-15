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

export const findMovies = (
  genres: string | Array<string> | undefined,
  years: string | Array<string> | undefined,
  countries: string | Array<string> | undefined,
) => {
  const genresURL = genres && `genres=${genres}`;
  const yearsURL = years && `years=${years}`;
  const countriesURL = countries && `countries=${countries}`;

  return fetch(`${BASE_URL}/movies/search?${genresURL}&${yearsURL}&${countriesURL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => checkResponse(res));
};
