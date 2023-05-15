import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FilteredMovies } from '../../types/types';

const initialState: FilteredMovies = {
  filteredMovies: [],
};

export const filteredMoviesSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setFilteredMovies(state, action: PayloadAction<FilteredMovies['filteredMovies']>) {
      state.filteredMovies = action.payload;
    },
  },
});

export const { setFilteredMovies } = filteredMoviesSlice.actions;

export default filteredMoviesSlice.reducer;
