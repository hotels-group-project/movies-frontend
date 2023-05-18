import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Filters } from '../../types/types';

type Property = keyof Filters;

type Action = {
  type: Property;
  value: Filters[Property];
};

const initialState: Filters = {
  genres: [],
  countries: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Action>) {
      if (action.payload.type === 'genres') {
        state[action.payload.type] = action.payload.value as Filters['genres'];
      }
      if (action.payload.type === 'countries') {
        state[action.payload.type] = action.payload.value as Filters['countries'];
      }
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
