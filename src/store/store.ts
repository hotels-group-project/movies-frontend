import { combineReducers, configureStore } from '@reduxjs/toolkit';

import activeFiltersReducer from './reducers/activeFiltersSlice';
import breakpointReducer from './reducers/breakpointSlice';
import dropdownMenuReducer from './reducers/dropdownMenuSlice';
import filterActivatedReducer from './reducers/filterActivatedSlice';
import filteredMoviesReducer from './reducers/filteredMoviesSlice';
import filtersReducer from './reducers/filtresSlice';
import moviesReducer from './reducers/moviesSlice';

const rootReducer = combineReducers({
  activeFilters: activeFiltersReducer,
  breakpoint: breakpointReducer,
  dropdownMenu: dropdownMenuReducer,
  filterActivated: filterActivatedReducer,
  filteredMovies: filteredMoviesReducer,
  filters: filtersReducer,
  movies: moviesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
