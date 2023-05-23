import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce, { Draft } from 'immer';

import { Movies, MovieCard } from '../../types/types';

const initialState: Movies = {
  movies: Array<Draft<MovieCard>>(),
  russian: Array<Draft<MovieCard>>(),
  foreign: Array<Draft<MovieCard>>(),
  cartoons: Array<Draft<MovieCard>>(),
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movies>) {
      return produce(state, draftState => {
        draftState.movies = action.payload.movies;
        draftState.russian = action.payload.russian;
        draftState.foreign = action.payload.foreign;
        draftState.cartoons = action.payload.cartoons;
      });
    },
  },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
