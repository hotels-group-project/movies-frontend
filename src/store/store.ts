import { combineReducers, configureStore } from '@reduxjs/toolkit';

import activeFiltersReducer from './reducers/activeFiltersSlice';
import breakpointReducer from './reducers/breakpointSlice';
import dropdownMenuReducer from './reducers/dropdownMenuSlice';
import filterActivatedReducer from './reducers/filterActivatedSlice';
import filteredMoviesReducer from './reducers/filteredMoviesSlice';
import filtersReducer from './reducers/filtresSlice';
import moviesReducer from './reducers/moviesSlice';
import personsFilterReducer from './reducers/personsFilterSlice';
import personsForSliderReducer from './reducers/personsForSliderSlice';

const rootReducer = combineReducers({
  activeFilters: activeFiltersReducer,
  breakpoint: breakpointReducer,
  dropdownMenu: dropdownMenuReducer,
  filterActivated: filterActivatedReducer,
  filteredMovies: filteredMoviesReducer,
  filters: filtersReducer,
  movies: moviesReducer,
  personsFilter: personsFilterReducer,
  persons: personsForSliderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
