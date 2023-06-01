import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Movie, MovieCard, FilmForMoviePage } from '../../types/types';

interface MovieState {
  movie: Movie | null;
  film: FilmForMoviePage;
  lookWith: Array<MovieCard>;
}

const initialState: MovieState = {
  movie: null,
  film: {
    film_id: 0,
    poster: '',
    name: '',
    type: '',
    ageRating: 0,
    genres: [],
    countries: [],
    year: 0,
    kprating: 0,
    movieLength: 0,
    alternativeName: '',
    description: '',
    shortDescription: '',
    slogan: '',
    kpvotes: 0,
    trailer: '',
    staff: [],
    lookWith: [],
    reviews: [],
  },
  lookWith: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie(state, action: PayloadAction<Movie>) {
      state.movie = action.payload;
      state.film = action.payload.film;
      state.lookWith = action.payload.lookWith;
    },
  },
});

export const { setMovie } = movieSlice.actions;

export default movieSlice.reducer;
