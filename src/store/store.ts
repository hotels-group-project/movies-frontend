import { combineReducers, configureStore } from '@reduxjs/toolkit';

import activeFiltersReducer from './reducers/activeFiltersSlice';
import breakpointReducer from './reducers/breakpointSlice';
import dropdownMenuReducer from './reducers/dropdownMenuSlice';
import filterActivatedReducer from './reducers/filterActivatedSlice';
import filteredMoviesReducer from './reducers/filteredMoviesSlice';
import filtersReducer from './reducers/filtresSlice';

const rootReducer = combineReducers({
  activeFilters: activeFiltersReducer,
  breakpoint: breakpointReducer,
  dropdownMenu: dropdownMenuReducer,
  filterActivated: filterActivatedReducer,
  filteredMovies: filteredMoviesReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
