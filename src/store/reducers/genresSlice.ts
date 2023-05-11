import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GENRES } from '../../components/Header/DropdownMenu/DropdownMenu.constants';
import { Genres } from '../../types/types';

const initialState: Genres = {
  genres: GENRES,
};

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenres(state, action: PayloadAction<Genres['genres']>) {
      state.genres = action.payload;
    },
  },
});

export const { setGenres } = genresSlice.actions;

export default genresSlice.reducer;
