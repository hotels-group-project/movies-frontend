import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ActiveFilters } from '../../types/types';

type Property = keyof ActiveFilters;

type Action = {
  key: Property;
  value: ActiveFilters[Property];
};

const initialState: ActiveFilters = {
  genres: [],
  countries: [],
  years: [],
  rating: [],
  producer: [],
  actor: [],
};

export const activeFiltersSlice = createSlice({
  name: 'activeFilters',
  initialState,
  reducers: {
    setActiveFilters(state, action: PayloadAction<Action>) {
      if (action.payload.key === 'genres') {
        state[action.payload.key] = action.payload.value as ActiveFilters['genres'];
      }
      if (action.payload.key === 'countries') {
        state[action.payload.key] = action.payload.value as ActiveFilters['countries'];
      }
      if (action.payload.key === 'years') {
        state[action.payload.key] = action.payload.value as ActiveFilters['years'];
      }
      if (action.payload.key === 'rating') {
        state[action.payload.key] = action.payload.value as ActiveFilters['rating'];
      }
      if (action.payload.key === 'producer') {
        state[action.payload.key] = action.payload.value as ActiveFilters['producer'];
      }
      if (action.payload.key === 'actor') {
        state[action.payload.key] = action.payload.value as ActiveFilters['actor'];
      }
    },
  },
});

export const { setActiveFilters } = activeFiltersSlice.actions;

export default activeFiltersSlice.reducer;
